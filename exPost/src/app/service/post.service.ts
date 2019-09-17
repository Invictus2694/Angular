import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private https$:HttpClient) { }

  public converToUpperCase(obj:any):Observable<any>{
    return this.https$.post("http://test-routes.herokuapp.com/test/uppercase",obj);
  }
}
