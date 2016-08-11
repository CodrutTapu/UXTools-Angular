export class barGraphModule {
    id:number;
    name:string;
    bars:any;

    constructor(id:number,name:string,bars:any) {
        this.id = id;
        this.name = name;
        this.bars = bars;
    }
}
