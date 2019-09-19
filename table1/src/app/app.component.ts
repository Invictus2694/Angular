import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private dataSource=[
    {"p_id":111,"p_name":"p_one","p_cost":10000,"p_qty":10},
    {"p_id":222,"p_name":"p_two","p_cost":20000,"p_qty":20},
    {"p_id":333,"p_name":"p_three","p_cost":30000,"p_qty":30},
    {"p_id":444,"p_name":"p_four","p_cost":40000,"p_qty":40},
    {"p_id":555,"p_name":"p_five","p_cost":50000,"p_qty":50},
  ];

  private displayColumn:string[]=["id","name","cost","qty"];
}
