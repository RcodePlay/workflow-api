import { WorkflowObj } from "../../domain/entities/workflow.entity.js";
import { WorkflowRepository } from "../../domain/interfaces/workflow.repository.interface";

export class GetAllWorkflowsUseCase {
    constructor(private workflowRepository: WorkflowRepository) {}

    async execute(): Promise<WorkflowObj[]> {
        return await this.workflowRepository.findAll();
    }
}
