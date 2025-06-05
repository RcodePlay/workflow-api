import { Request, Response, NextFunction } from 'express';
import { CreateRegistrationUseCase } from "../../use-cases/registration/createRegistration.usecase";
import { GetAllRegistrationsUseCase } from "../../use-cases/registration/getAllRegistrations.usecase";
import { GetRegistrationUseCase } from "../../use-cases/registration/getRegistration.usecase";
import { UpdateRegistrationUseCase } from "../../use-cases/registration/updateRegistration.usecase";
import { DeleteRegistrationUseCase } from "../../use-cases/registration/deleteRegistration.usecase";
import { CreateRegistrationDTO, UpdateRegistrationDTO } from "../../use-cases/dto/registration.dto";

export class RegistrationController {
    constructor(
        private createRegistration: CreateRegistrationUseCase,
        private updateRegistration: UpdateRegistrationUseCase,
        private deleteRegistration: DeleteRegistrationUseCase,
        private getRegistration: GetRegistrationUseCase,
        private getAllRegistrations: GetAllRegistrationsUseCase
    ) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const dto: CreateRegistrationDTO = req.body;
            const registration = await this.createRegistration.execute(dto);
            res.status(201).json(registration.toJSON());
        } catch (error) {
            next(error);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.getAllRegistrations.execute();
            res.status(200).json(result.map(w => w.toJSON()));
        } catch (error) {
            next(error);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const registration = await this.getRegistration.execute(id);
            res.status(200).json(registration ? registration.toJSON() : {});
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const dto: UpdateRegistrationDTO = req.body;
            const updated = await this.updateRegistration.execute(id, dto);
            res.status(200).json(updated ? updated.toJSON() : {});
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const result = await this.deleteRegistration.execute(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}