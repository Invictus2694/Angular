import { Component, ViewChild } from '@angular/core';
import { CustomerService } from './customer.service';
import { MatPaginator,MatSort, MatTableDataSource } from "@angular/material";
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private result:any;
  private subscription:any;
  private displayedColumns:string[]=["Name","City","Country"];

  @ViewChild(MatPaginator,{static:true})
  private paginator:MatPaginator;

  @ViewChild(MatSort,{static:true})
  private sort:MatSort;

  constructor(private service$:CustomerService){}

  ngOnInit(){
    this.subscription=this.service$.getCustomers().subscribe(
      (posRes)=>{
        this.result=new MatTableDataSource(posRes.records);  //converting server data to table data

        this.result.paginator=this.paginator; //adding paginator to the table data

        this.result.sort=this.sort; //adding sort to table data;

      },
      (err:HttpErrorResponse)=>{
        if(err.error instanceof Error)
        console.log("Client Side Error");
        else
        console.log("Server Side Error");
      }
    );
  }

  public filterData(data):any{
    this.result.filter=data.trim().toLowerCase();  //adding filter to the table response

    if(this.result.paginator){
      this.result.paginator.firstPage();  //if there is a pagination applied to the table then start filter from the first page
    }


  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
