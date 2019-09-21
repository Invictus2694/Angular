import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
    private result:any;
    private subscription:any;
    private displayColumns:string[]=["Name","City","Country"];

    @ViewChild(MatPaginator,{static:true})
    private paginator:MatPaginator;

  constructor(private service$:CustomerService) { }

  ngOnInit() {
    this.subscription=this.service$.getCustomers().subscribe(
      (posRes)=>{
        this.result= new MatTableDataSource(posRes.records);
        this.result.paginator=this.paginator;
      },
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error)
      console.log("Client Side Error");
      else
      console.log("Server Side Error");
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
