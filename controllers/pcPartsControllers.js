import pcPartsRepository from "../repositories/pcPartsRepositories.js";
import newGPUErrorHandling from "../utils/newGPUErrorHandling.js";

const pcPartsController = {
    getPcParts: async (req, res) => {
        const data = await pcPartsRepository.getAll();
        if (data) res.status(200).send(data);
        else res.status(404).send(data);
    },
    getGPUs: async (req, res) => {
        const data = await pcPartsRepository.getAllGPUs();
        if (data) res.status(200).send(data);
        else res.status(404).send(data);
    },
    getCPUs: async (req, res) => {
        const data = await pcPartsRepository.getAllCPUs();
        if (data) res.status(200).send(data);
        else res.status(404).send(data);
    },
    addNewGPU: async (req, res) => {
        const { gpu_brand, gpu_model, gpu_memory } = req.body;
        const errorMessages = [];

        newGPUErrorHandling(gpu_brand, gpu_model, gpu_memory, errorMessages);

        if (errorMessages.length > 0) {
            return res.status(400).json({
                status: 400,
                ok: false,
                message: errorMessages,
            });
        }

        const newGPU = {
            gpu_brand: gpu_brand,
            gpu_model: gpu_model,
            gpu_memory: gpu_memory,
        }

        const data = await pcPartsRepository.addGPU(newGPU);
        if (data) res.status(200).send(data);
        else res.status(404).send(data);
    }
}

export default pcPartsController;