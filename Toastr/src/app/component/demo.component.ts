import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {

  constructor(private obj$:ToastrService) { }

  clickMe(){
    this.obj$.warning("Please Close the Browser and shutdown the server","Warning");
  }
  
  ngOnInit() {
  }

}
