import pcParts from "../models/pcparts.js";

const pcPartsRepository = {
    async getAll() {
        const sql = 'SELECT * FROM gpus; SELECT * FROM cpus;';
        try {
            const [results] = await pcParts.promise().query(sql);
            const [gpus, cpus] = results;
            return { gpus, cpus };
        } catch (error) {
            return { error };
        }
    },
    async getAllGPUs() {
        const sql = 'SELECT * FROM gpus;';
        const list = await pcParts.promise().execute(sql).catch(error => {
            return [error]
        });
        return list[0]
    },
    async getAllCPUs() {
        const sql = 'SELECT * FROM cpus;';
        const list = await pcParts.promise().execute(sql).catch(error => {
            return [error]
        });
        return list[0]
    },
    async addGPU(gpu) {
        const sql = 'INSERT INTO gpus (gpu_brand, gpu_model, gpu_memory) VALUES (?, ?, ?);';
        const list = await pcParts.promise().execute(sql,
            [
                gpu.gpu_brand,
                gpu.gpu_model,
                gpu.gpu_memory,
            ]
        ).catch(error => {
            return [error];
        });
        return list[0]
    },
};

export default pcPartsRepository;
