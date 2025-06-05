export class RegistrationObj {
    private readonly _id?: string;
    private readonly _title: string;
    private readonly _note: string;
    private readonly _workflow: string;

    constructor(data: any) {
        this._id = data._id?.toString();
        this._title = data.title;
        this._note = data.note;
        this._workflow = data.workflow;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get note() {
        return this._note;
    }

    get workflow() {
        return this._workflow;
    }

    toJSON() {
        const json: any = {
            title: this._title,
            note: this._note,
            workflow: this._workflow
        };

        if (this._id) {
            json._id = this._id;
        }

        return json;
    }
}