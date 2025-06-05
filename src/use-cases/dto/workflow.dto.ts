export interface CreateWorkflowDTO {
    title: string;
    description: string;
    type: string;
}

export interface UpdateWorkflowDTO {
    title?: string;
    description?: string;
    type?: string;
}