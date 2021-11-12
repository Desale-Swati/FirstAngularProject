import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  loginform: NgForm | any;
 // loginform: NgForm | undefined; // he ka ghetal aahe mala ky mahit mala 
 // form: any;

  constructor() { }



  ngOnInit(): void {
  }

  //

  //maza code patla tr thev nhi tr hech rahu dejo 
// ata theva as pass nhi karat code challa tuza no issue but samjun tr kr aapan ky pass kartoy kuthe kartoy te tari bg n kalel kasbr mg he result ka ghetla 
 // simple aahe fakr form jo mi gheil to as a event pass kela and .value mahnje records 


  Data (loginform: any) {
    console.log ( loginform.value);
  }

  // submit(ata: any){
  //   console.log(ata);
  // }

  clear(){
    this.loginform.reset();

   }
} 