import { WorkflowObj } from "../entities/workflow.entity.js";
import { CreateWorkflowDTO, UpdateWorkflowDTO } from "../../use-cases/dto/workflow.dto";

export interface WorkflowRepository {
    create(workflow: WorkflowObj): Promise<WorkflowObj>;
    findById(workflowId: string): Promise<WorkflowObj | null>;
    findAll(): Promise<WorkflowObj[]>;
    update(id: string, data: UpdateWorkflowDTO): Promise<WorkflowObj | null>;
    delete(id: string): Promise<boolean>;
}