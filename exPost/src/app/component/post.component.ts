import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent{

  private result:any;
  private sub:any;

  constructor(private service$:PostService) { }

  public clickMe(obj:any){

    this.sub=this.service$.converToUpperCase(obj).subscribe(
      (pos)=>{ this.result=pos;},
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error)
      console.log("Client Side Error");
      else
      console.log("Server Side Error");
    });
  };
  ngOnDestroy(){
    this.sub.unsubscribe();
  };

};
