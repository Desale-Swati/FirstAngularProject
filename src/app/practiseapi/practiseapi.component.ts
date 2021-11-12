import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practiseapi',
  templateUrl: './practiseapi.component.html',
  styleUrls: ['./practiseapi.component.css']
})
export class PractiseapiComponent implements OnInit {
  url="https://jsonplaceholder.typicode.com/todos";
   apidata:any;

   constructor(public http:HttpClient) {}

   ngOnInit() {
     this.http.get(this.url).subscribe(data=>{
      this.apidata= data;
     });
  }

}
