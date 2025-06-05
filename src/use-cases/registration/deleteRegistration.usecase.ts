import { RegistrationRepository } from "../../domain/interfaces/registration.repository.interface";

export class DeleteRegistrationUseCase {
    constructor(private registrationRepository: RegistrationRepository) {}

    async execute(id: string): Promise<boolean> {
        return await this.registrationRepository.delete(id);
    }
}
