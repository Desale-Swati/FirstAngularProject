import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apicall-swati',
  templateUrl: './apicall-swati.component.html',
  styleUrls: ['./apicall-swati.component.css']
})
export class ApicallSwatiComponent implements OnInit {

// kr ithe api use me aahe ithech  ho 
url="https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
  newapiData: any;



  constructor( public  http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(data =>{ 
      this.newapiData = data;
     // alert (this.name);
  
    })


  }

}
