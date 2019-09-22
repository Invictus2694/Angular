import { Component, ViewChild } from '@angular/core';
import { MatSort , MatPaginator, MatTableDataSource } from "@angular/material";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private result:any;
  private array:Array<any>=[
    {name:"Frozen Yogurt", calories:237, fat:9, carbs:37, protein:4},
    {name:"Ice Cream Sandwich", calories:245, fat:6, carbs:40, protein:6},
    {name:"Eclair", calories:220, fat:5, carbs:38, protein:7},
    {name:"Cupcake", calories:324, fat:14, carbs:42, protein:12},
    {name:"GingerBread", calories:454, fat:24, carbs:48, protein:16},
  ];

  private displayedColumns:string[]=["name","calories","fat","carbs","protein"];

  @ViewChild(MatSort,{static:true})
  private sort:MatSort;

  @ViewChild(MatPaginator,{static:true})
  private paginator:MatPaginator;

  ngOnInit(){
    this.result=new MatTableDataSource(this.array);
    this.result.paginator=this.paginator;
    this.result.sort=this.sort;
  };
  
}
