import {WorkflowObj} from "../../domain/entities/workflow.entity.js";
import {WorkflowRepository} from "../../domain/interfaces/workflow.repository.interface";
import {CreateWorkflowDTO} from "../dto/workflow.dto";

export class CreateWorkflowUseCase {
    constructor(private workflowRepository: WorkflowRepository) {}

    async execute(data: CreateWorkflowDTO): Promise<WorkflowObj> {
        const workflow = new WorkflowObj({
            title: data.title,
            description: data.description,
            type: data.type
        });

        return await this.workflowRepository.create(workflow);
    }
}