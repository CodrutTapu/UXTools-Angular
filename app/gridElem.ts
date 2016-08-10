export class gridElem {
    id:number;
    dim:number;
    moduleType:any;
    color:string;

    constructor(dim:number,id:number,moduleType:any,color:string) {
        this.dim = dim;
        this.id = id;
        this.moduleType = moduleType;
        this.color = color;
    }
}
