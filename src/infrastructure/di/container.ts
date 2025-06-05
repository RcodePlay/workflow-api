import { WorkflowMongoRepository } from '../repositories/workflow.mongo.repository.js';
import {WorkflowController} from "../../interface/controllers/workflow.controller.js";

import {RegistrationMongoRepository} from "../repositories/registration.mongo.repository.js";
import {RegistrationController} from "../../interface/controllers/registration.controller.js";

import {CreateWorkflowUseCase} from "../../use-cases/workflow/createWorkflow.usecase.js";
import {GetWorkflowUseCase} from "../../use-cases/workflow/getWorkflow.usecase.js";
import {GetAllWorkflowsUseCase} from "../../use-cases/workflow/getAllWorkflows.usecase.js";
import {UpdateWorkflowUseCase} from "../../use-cases/workflow/updateWorkflow.usecase.js";
import {DeleteWorkflowUseCase} from "../../use-cases/workflow/deleteWorkflow.usecase.js";

import {CreateRegistrationUseCase} from "../../use-cases/registration/createRegistration.usecase.js";
import {GetRegistrationUseCase} from "../../use-cases/registration/getRegistration.usecase.js";
import {GetAllRegistrationsUseCase} from "../../use-cases/registration/getAllRegistrations.usecase.js";
import {UpdateRegistrationUseCase} from "../../use-cases/registration/updateRegistration.usecase.js";
import {DeleteRegistrationUseCase} from "../../use-cases/registration/deleteRegistration.usecase.js";

// Repositories
const workflowRepo = new WorkflowMongoRepository();
const registrationRepo = new RegistrationMongoRepository();


// Workflow Use Cases
const createWorkflow = new CreateWorkflowUseCase(workflowRepo);
const getWorkflow = new GetWorkflowUseCase(workflowRepo);
const updateWorkflow = new UpdateWorkflowUseCase(workflowRepo);
const deleteWorkflow = new DeleteWorkflowUseCase(workflowRepo);
const getAllWorkflows = new  GetAllWorkflowsUseCase(workflowRepo);


// Registration Use Cases
const createRegistration = new CreateRegistrationUseCase(registrationRepo);
const getRegistration = new GetRegistrationUseCase(registrationRepo);
const updateRegistration = new UpdateRegistrationUseCase(registrationRepo);
const deleteRegistration = new DeleteRegistrationUseCase(registrationRepo);
const getAllRegistrations = new GetAllRegistrationsUseCase(registrationRepo);

export const workflowController = new WorkflowController(createWorkflow, updateWorkflow, deleteWorkflow, getWorkflow, getAllWorkflows);
export const registrationController = new RegistrationController(createRegistration, updateRegistration, deleteRegistration, getRegistration, getAllRegistrations);