export class WorkflowObj {
    private readonly _id?: string;
    private readonly _title: string;
    private readonly _description: string;
    private readonly _type: string;

    constructor(data: any) {
        this._id = data._id?.toString();
        this._title = data.title;
        this._description = data.description;
        this._type = data.type;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get type() {
        return this._type;
    }

    toJSON() {
        const json: any = {
            title: this._title,
            description: this._description,
            type: this._type
        };
        
        if (this._id) {
            json._id = this._id;
        }
        
        return json;
    }
}