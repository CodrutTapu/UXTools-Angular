export class pieChartModule {
    id:number;
    name:string;
    labels:any;
    data:any;

    constructor(id:number,name:string,labels:any,data:any) {
        this.id = id;
        this.name = name;
        this.labels = labels;
        this.data = data;
    }
}
