import mongoose, { Document } from 'mongoose';

interface IWorkflow extends Document {
    title: string;
    description: string;
    type: string;
}

const WorkflowSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true }
})

const WorkflowModel = mongoose.model<IWorkflow>('Workflow', WorkflowSchema);
export { WorkflowModel, IWorkflow };
