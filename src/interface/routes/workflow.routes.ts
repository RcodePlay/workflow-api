import {Router} from "express";
import {workflowController} from "../../infrastructure/di/container.js";

const router = Router();

router.get('/', workflowController.findAll.bind(workflowController));
router.get('/:id', workflowController.findById.bind(workflowController));
router.post('/', workflowController.create.bind(workflowController));
router.put('/:id', workflowController.update.bind(workflowController));
router.delete('/:id', workflowController.delete.bind(workflowController));

export {router as workflowRoutes};