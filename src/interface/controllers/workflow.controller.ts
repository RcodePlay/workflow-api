import { Request, Response, NextFunction } from 'express';
import { CreateWorkflowUseCase } from "../../use-cases/workflow/createWorkflow.usecase";
import { GetAllWorkflowsUseCase } from "../../use-cases/workflow/getAllWorkflows.usecase";
import { GetWorkflowUseCase } from "../../use-cases/workflow/getWorkflow.usecase";
import { UpdateWorkflowUseCase } from "../../use-cases/workflow/updateWorkflow.usecase";
import { DeleteWorkflowUseCase } from "../../use-cases/workflow/deleteWorkflow.usecase";
import { CreateWorkflowDTO, UpdateWorkflowDTO } from "../../use-cases/dto/workflow.dto";

export class WorkflowController {
    constructor(
        private createWorkflow: CreateWorkflowUseCase,
        private updateWorkflow: UpdateWorkflowUseCase,
        private deleteWorkflow: DeleteWorkflowUseCase,
        private getWorkflow: GetWorkflowUseCase,
        private getAllWorkflows: GetAllWorkflowsUseCase
    ) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const dto: CreateWorkflowDTO = req.body;
            const workflow = await this.createWorkflow.execute(dto);
            res.status(201).json(workflow.toJSON());
        } catch (error) {
            next(error);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.getAllWorkflows.execute();
            res.status(200).json(result.map(w => w.toJSON()));
        } catch (error) {
            next(error);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const workflow = await this.getWorkflow.execute(id);
            res.status(200).json(workflow ? workflow.toJSON() : {});
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const dto: UpdateWorkflowDTO = req.body;
            const updated = await this.updateWorkflow.execute(id, dto);
            res.status(200).json(updated ? updated.toJSON() : {});
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const result = await this.deleteWorkflow.execute(id);
            res.status(204).send();  // Don't send JSON with 204
        } catch (error) {
            next(error);
        }
    }
}