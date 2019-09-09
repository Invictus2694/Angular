import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root",
    
})
export class dbservice{
    public mysqlData():string{
        return "MySQL Data coming soon..!"
    };
    public mongodbData():string{
        return "MongoDB Data coming soon..!"
    };
    public mssqlData():string{
        return "MsSQL data coming soon..!"
    };
};