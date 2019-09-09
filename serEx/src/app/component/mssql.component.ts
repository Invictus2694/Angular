import { Component } from "@angular/core";
import { dbservice } from "../services/db.service"

@Component({
    selector:"mssql",
    templateUrl:"./mssql.component.html"
})
export class mssqlComponent{
    private result:string;
    constructor(private _obj:dbservice){}
    ngOnInit(){
        this.result=this._obj.mssqlData();
    }
}