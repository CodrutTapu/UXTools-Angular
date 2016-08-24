export class user {
    id:number;
    name: string;
    documents: any;

    constructor(id:number,name:string,documents:any) {
        this.id = id;
        this.name = name;
        this.documents = documents;
    }
}
