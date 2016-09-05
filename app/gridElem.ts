export class gridElem {
    id:number;
    dim:number;
    moduleType:any;
    bgColor:any;

    constructor(dim:number,id:number,moduleType:any,bgColor:any) {
        this.dim = dim;
        this.id = id;
        this.moduleType = moduleType;
        this.bgColor = bgColor;
    }
}
