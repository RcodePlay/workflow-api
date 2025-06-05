import { WorkflowRepository } from "../../domain/interfaces/workflow.repository.interface";

export class DeleteWorkflowUseCase {
    constructor(private workflowRepository: WorkflowRepository) {}

    async execute(id: string): Promise<boolean> {
        return await this.workflowRepository.delete(id);
    }
}
