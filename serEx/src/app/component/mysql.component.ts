import { Component } from "@angular/core";
import { dbservice } from "../services/db.service";
@Component({
    selector:"mysql",
    templateUrl:"./mysql.component.html"
})
export class mysqlComponent{
    private result:string;
    constructor(private _obj:dbservice){}
    ngOnInit(){
        this.result=this._obj.mysqlData();
    }
}