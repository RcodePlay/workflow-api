import { RegistrationObj } from "../../domain/entities/registration.entity.js";
import {RegistrationRepository} from "../../domain/interfaces/registration.repository.interface";
import {CreateRegistrationDTO} from "../dto/registration.dto";

export class CreateRegistrationUseCase {
    constructor(private registrationRepository: RegistrationRepository) {}

    async execute(data: CreateRegistrationDTO): Promise<RegistrationObj> {
        const registration = new RegistrationObj({
            title: data.title,
            note: data.note,
            workflow: data.workflow
        });

        return await this.registrationRepository.create(registration);
    }
}