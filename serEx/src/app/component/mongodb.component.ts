import { Component } from "@angular/core";
import { dbservice } from "../services/db.service";
@Component({
    selector:"mongodb",
    templateUrl:"./mongodb.component.html"
})
export class mongodbComponent{
    private result:string;
    constructor(private _obj:dbservice){}
    ngOnInit(){
        this.result=this._obj.mongodbData();
    }
}