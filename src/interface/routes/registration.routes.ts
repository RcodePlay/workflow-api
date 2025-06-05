import {Router} from "express";
import {registrationController} from "../../infrastructure/di/container.js";

const router = Router();

router.get('/', registrationController.findAll.bind(registrationController));
router.get('/:id', registrationController.findById.bind(registrationController));
router.post('/', registrationController.create.bind(registrationController));
router.put('/:id', registrationController.update.bind(registrationController));
router.delete('/:id', registrationController.delete.bind(registrationController));

export {router as registrationRoutes};