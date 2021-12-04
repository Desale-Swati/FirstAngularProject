import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-practiseapi',
  templateUrl: './practiseapi.component.html',
  styleUrls: ['./practiseapi.component.css']
})
export class PractiseapiComponent implements OnInit {
  //url="https://jsonplaceholder.typicode.com/todos";
  // apidata:any={};
   apidata: any ;

   constructor(public http:HttpClient ) {
      //this.apidata= employeeData;
    }

   ngOnInit() {
     this.http.get('assets/employeeData.json').subscribe(data=>{
      this.apidata= data;
      console.log(this.apidata);
     });
    }

}
