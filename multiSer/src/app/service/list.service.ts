import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private service$:ProductsService) { }
  public fun_one():any{
    return {"qty":this.service$.getProducts()}
  };
}
