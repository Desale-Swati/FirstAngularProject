import { Injectable } from '@angular/core';
import { ApicallSwatiComponent } from './apicall-swati/apicall-swati.component';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor() { }

  studentsList(): { Id: string; name: string; address: string; }[]{
    return[{
      Id:"1",
      name:"swati",
      address:"gidhade"},
    {
      Id:'2',
      name:"shree",
      address:"Shirpur",
    },
    {
      Id:"3",
      name:"jaya",
      address:"dhule"
    },
    {
      Id:"4",
      name:"ram",
      address:" nashik"
    }
  ];
  }
}
