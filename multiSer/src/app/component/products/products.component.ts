import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'product',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  private result:any;
  constructor(private obj:ListService) { }

  ngOnInit() {
    this.result=this.obj.fun_one();
  }

}
