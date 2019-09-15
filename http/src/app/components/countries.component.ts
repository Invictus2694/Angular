import { Component } from "@angular/core";
import { CountriesService } from '../services/countries.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector:"country",
  templateUrl:"./countries.component.html"
})
export class CountriesComponent{

    private result:any;
    private subObj:any;

    constructor(private service$:CountriesService){}

    ngOnInit(){
      this.subObj=this.service$.getCountries().subscribe((pos)=>{
        this.result=pos;
      },
      (err:HttpErrorResponse)=>{
        console.log(err);
      });
    }
    ngOnDestroy(){
      this.subObj.unsubscribe();
    }
}