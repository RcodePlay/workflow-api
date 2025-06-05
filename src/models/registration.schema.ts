import mongoose, { Document } from 'mongoose';

interface IRegistration extends Document {
    title: string;
    note: string;
    workflow: string;
}

const RegistrationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    note: { type: String, required: true },
    workflow: { type: String, required: true }
})

const RegistrationModel = mongoose.model<IRegistration>('Registration', RegistrationSchema);
export { RegistrationModel, IRegistration };
