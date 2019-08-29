import {Component} from "@angular/core";

@Component({
    selector:"radheshyam",
    templateUrl:"./first.component.html"
})

export class firstComponent{
    //it recommended to use private access modifers on the local variable.
    private  mean:string;
    private  mern:string;
    private mevn:string;

    constructor(){
        this.mean="MEAN STACK..!";
        this.mern="MERN STACK..!";
        this.mevn="MEVN STACK..!";
    }

    //it is recommended to use public access modifier in the functions..

     public meanDeveloper():string {
        return this.mean;
    }
    public mernDeveloper():string{
        return this.mern;
    }
    public mevnDeveloper():string{
        return this.mevn;
    }


}