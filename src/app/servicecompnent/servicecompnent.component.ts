import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-servicecompnent',
  templateUrl: './servicecompnent.component.html',
  styleUrls: ['./servicecompnent.component.css']
})
export class ServicecompnentComponent implements OnInit {

  constructor( private swati:NewserviceService) { }
 data3:any;
  ngOnInit(): void {
    this.data3=this.swati.studentsList();
    console.log(this.data3);
  }

}
