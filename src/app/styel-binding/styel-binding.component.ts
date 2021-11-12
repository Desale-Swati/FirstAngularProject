import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styel-binding',
  templateUrl: './styel-binding.component.html',
  styleUrls: ['./styel-binding.component.css']
})
export class StyelBindingComponent implements OnInit {

  vediopath="https://www.hotstar.com/in/tv/jeevlaga/1260004608";

  height:number =500;

  width:number=1350;

  value1="hiiiii";
  disable=true;
  disablebox(){
    this.disable=false;
  }  
  
  name = 'Angular';
  isSpecial= true;
  classExpression= 'special clearance'; 
  active= true;
  appstyle = false;
  //active= true;
  att_bind= 'good' ; //search kr ja ithe nhi notepad notes
  constructor() { }

  ngOnInit(): void {
  }

}