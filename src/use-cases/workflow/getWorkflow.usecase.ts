import { WorkflowObj } from "../../domain/entities/workflow.entity.js";
import { WorkflowRepository } from "../../domain/interfaces/workflow.repository.interface";

export class GetWorkflowUseCase {
    constructor(private workflowRepository: WorkflowRepository) {}

    async execute(id: string): Promise<WorkflowObj | null> {
        return await this.workflowRepository.findById(id);
    }
}
