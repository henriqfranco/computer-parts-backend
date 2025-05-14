import { Router } from "express";
import pcPartsController from "../controllers/pcPartsControllers.js";

const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({message: "PC Parts System"})
});

routes.get('/pcparts', pcPartsController.getPcParts);
routes.get('/pcparts/gpu', pcPartsController.getGPUs);
routes.get('/pcparts/cpu', pcPartsController.getCPUs);

export default routes;