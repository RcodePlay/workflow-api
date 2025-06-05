import { WorkflowRepository } from "../../domain/interfaces/workflow.repository.interface.js";
import { WorkflowObj } from "../../domain/entities/workflow.entity.js";
import { WorkflowModel } from "../../models/workflow.schema.js";
import { UpdateWorkflowDTO } from "../../use-cases/dto/workflow.dto.js";

export class WorkflowMongoRepository implements WorkflowRepository {
    async create(workflow: WorkflowObj): Promise<WorkflowObj> {
        const newWorkflow = await WorkflowModel.create(workflow.toJSON());
        return new WorkflowObj(newWorkflow.toObject());
    }

    async findById(id: string): Promise<WorkflowObj | null> {
        const found = await WorkflowModel.findById(id);
        return found ? new WorkflowObj(found.toObject()) : null;
    }

    async findAll(): Promise<WorkflowObj[]> {
        const docs = await WorkflowModel.find();
        return docs.map(doc => new WorkflowObj(doc.toObject()));
    }

    async update(id: string, data: UpdateWorkflowDTO): Promise<WorkflowObj | null> {
        const updated = await WorkflowModel.findByIdAndUpdate(id, data, { new: true });
        return updated ? new WorkflowObj(updated.toObject()) : null;
    }

    async delete(id: string): Promise<boolean> {
        const result = await WorkflowModel.findByIdAndDelete(id);
        return result !== null;
    }
}