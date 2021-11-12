import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemImageUrl = 'assets/Swati.jpg';
  newimg= 'assets/1 june.png';
  
  name='swati desale';
  today= Date.now();
  val= 10;

  
  show = false;
  btnName = 'show';
  hide:any;
  constructor() { }

  ngOnInit(): void {
  }

  sssss(){
    this.show = !this.show

    if(this.show){
      this.btnName = 'hide'
    }
    else {
      this.btnName = 'show'
    }
  }

}



