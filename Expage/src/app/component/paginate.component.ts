import { Component, OnInit } from '@angular/core';
import { PaginateService } from '../service/paginate.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page',
  templateUrl: './paginate.component.html',
  styles: []
})
export class PaginateComponent implements OnInit {
  private result:any;

  constructor(private service$:PaginateService) { }

  ngOnInit() {
    this.service$.getCountries().subscribe((pos)=>{
      this.result=pos;
    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error)
      console.log("client side error");
      else
      console.log("Server side error");
    });
  }

}
