import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  show=false;  //next time use boolean here and apply condition using loop (its only suggestion not manditory ) ata kru ka 
  show3: boolean = false; //continue
  show1="yes";

  show2="green";

  color="green";

  data1=[ 'a','b','c','d']
  data=[
    
    { name:'a',
      age:20,
    },
    { name:'b',
      age:21,
    },
    { name:'c',
      age:22,
    },
    { name:'d',
      age:23,
    }
  ]
   

   classname =" wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"; 
  //  Propbind='';
   //ky kartoy proprty ghetli na binding sathi are ho pn tu same same ka ghete name badal n clo

    constructor() { }

  ngOnInit(): void {
  }
  convertToDate(){
    const date = new Date();
    return date.toLocaleDateString();
  }

}
