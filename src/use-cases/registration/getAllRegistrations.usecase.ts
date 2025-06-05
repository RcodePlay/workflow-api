import { RegistrationObj } from "../../domain/entities/registration.entity.js";
import { RegistrationRepository } from "../../domain/interfaces/registration.repository.interface";

export class GetAllRegistrationsUseCase {
    constructor(private registrationRepository: RegistrationRepository) {}

    async execute(): Promise<RegistrationObj[]> {
        return await this.registrationRepository.findAll();
    }
}
