import {RegistrationRepository} from "../../domain/interfaces/registration.repository.interface.js";
import {RegistrationObj} from "../../domain/entities/registration.entity.js";
import {RegistrationModel} from "../../models/registration.schema.js";
import {UpdateRegistrationDTO} from "../../use-cases/dto/registration.dto.js";

export class RegistrationMongoRepository implements RegistrationRepository {
    async create(workflow: RegistrationObj): Promise<RegistrationObj> {
        const newWorkflow = await RegistrationModel.create(workflow.toJSON());
        return new RegistrationObj(newWorkflow.toObject());
    }

    async findById(id: string): Promise<RegistrationObj | null> {
        const found = await RegistrationModel.findById(id);
        return found ? new RegistrationObj(found.toObject()) : null;
    }

    async findAll(): Promise<RegistrationObj[]> {
        const docs = await RegistrationModel.find();
        return docs.map(doc => new RegistrationObj(doc.toObject()));
    }

    async update(id: string, data: UpdateRegistrationDTO): Promise<RegistrationObj | null> {
        const updated = await RegistrationModel.findByIdAndUpdate(id, data, { new: true });
        return updated ? new RegistrationObj(updated.toObject()) : null;
    }

    async delete(id: string): Promise<boolean> {
        const result = await RegistrationModel.findByIdAndDelete(id);
        return result !== null;
    }
}