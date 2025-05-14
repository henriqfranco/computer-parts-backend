import pcPartsRepository from "../repositories/pcPartsRepositories.js";

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
    }
}

export default pcPartsController;