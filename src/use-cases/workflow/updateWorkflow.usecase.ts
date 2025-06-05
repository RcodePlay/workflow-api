import { WorkflowObj } from "../../domain/entities/workflow.entity.js";
import { WorkflowRepository } from "../../domain/interfaces/workflow.repository.interface";
import { UpdateWorkflowDTO } from "../dto/workflow.dto";

export class UpdateWorkflowUseCase {
    constructor(private workflowRepository: WorkflowRepository) {}

    async execute(id: string, data: UpdateWorkflowDTO): Promise<WorkflowObj | null> {
        return await this.workflowRepository.update(id, data);
    }
}
