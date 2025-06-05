import { RegistrationObj } from "../../domain/entities/registration.entity.js";
import { RegistrationRepository } from "../../domain/interfaces/registration.repository.interface";
import { UpdateRegistrationDTO } from "../dto/registration.dto";

export class UpdateRegistrationUseCase {
    constructor(private registrationRepository: RegistrationRepository) {}

    async execute(id: string, data: UpdateRegistrationDTO): Promise<RegistrationObj | null> {
        return await this.registrationRepository.update(id, data);
    }
}
