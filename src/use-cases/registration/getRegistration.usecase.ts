import { RegistrationObj } from "../../domain/entities/registration.entity.js";
import { RegistrationRepository } from "../../domain/interfaces/registration.repository.interface";

export class GetRegistrationUseCase {
    constructor(private registrationRepository: RegistrationRepository) {}

    async execute(id: string): Promise<RegistrationObj | null> {
        return await this.registrationRepository.findById(id);
    }
}
