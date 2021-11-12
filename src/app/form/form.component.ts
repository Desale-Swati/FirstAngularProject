import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

// formcomponent ha ek class ch aahe bg br 
export class FormComponent implements OnInit { 

  // and ithe fromgroup la tu userform la bindg kela ha zala object simple  eth object userform ok 
  userForm = new FormGroup({   
    firstName: new FormControl(),  
    email: new FormControl(), 
    // country: new FormControl(),  
    // city: new FormControl(),   
    // postalCode: new FormControl()   
    address: new FormGroup({  
        country: new FormControl(),  
        city: new FormControl(),  
        postalCode: new FormControl() 
    })  
});

  constructor() { }
 
  ngOnInit(): void {
  }

  // ithe bg form chya value aapan console la display kelya tith fakt db la jatil hm databse ks tayr karta mhnje mi clg la hoti teva sql madhe karta yaych mal ata v4r pdla karu te pn formal asat 
  submitForm(){
console.log(this.userForm.value);
alert( "Submitted Successfully ");  
  }
}
