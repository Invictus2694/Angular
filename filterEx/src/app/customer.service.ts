import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  public getCustomers():Observable<any>{
    return this._http.get("https://www.w3schools.com/angular/customers.php");
  }
}
