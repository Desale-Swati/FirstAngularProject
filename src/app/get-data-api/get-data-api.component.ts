import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data-api',
  templateUrl: './get-data-api.component.html',
  styleUrls: ['./get-data-api.component.css']
})
export class GetDataApiComponent implements OnInit {

  constructor( private http: HttpClient) { }
// define url as static path 
  url = "https://jsonplaceholder.typicode.com/todos"; 

  //same asch karaych aahe tula same oh mg ky avgad hot khi nhi kr ata tu mi pagto pahto ho tu bolnar nhi ka mazyashi ata ky nachtoy ka mg bolat nhi tu te nantr bgu aadhi kr hrnanter tu bgnar nhi 
  // name is a property and its define // jr ashi define asel tr code madhe kuthe hi tu use karu shaktes this keyword use karun 

  name = "Swati ";

  

  getapiData:any; 

  ngOnInit() {
    this.http.get(this.url).subscribe(data =>{ 
      this.getapiData = data;
      alert (this.name);
  
    })

   }
 //call hot nhiye error detay  ## function madhe call hou shakt as sangych hot pn dam nhi aapl 
 
}
