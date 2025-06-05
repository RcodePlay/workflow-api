export interface CreateRegistrationDTO {
    title: string;
    note: string;
    workflow: string;
}

export interface UpdateRegistrationDTO {
    title?: string;
    note?: string;
    workflow?: string;
}