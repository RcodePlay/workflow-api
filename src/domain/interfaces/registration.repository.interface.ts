import { RegistrationObj } from "../entities/registration.entity.js";
import { CreateRegistrationDTO, UpdateRegistrationDTO } from "../../use-cases/dto/registration.dto";

export interface RegistrationRepository {
    create(workflow: RegistrationObj): Promise<RegistrationObj>;
    findById(workflowId: string): Promise<RegistrationObj | null>;
    findAll(): Promise<RegistrationObj[]>;
    update(id: string, data: UpdateRegistrationDTO): Promise<RegistrationObj | null>;
    delete(id: string): Promise<boolean>;
}