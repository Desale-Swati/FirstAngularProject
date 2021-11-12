import { Component,OnInit} from '@angular/core'
import { FormControl,FormGroup,  Validators  } from '@angular/forms';
//import { dateLessThan } from '../custom.validation';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {
  
//  form:FormGroup;  zal pudhe chalun 

abc:any;
  constructor() { }
  ngOnInit() {

  }  

  form= new FormGroup ({
  //he bg form lla filed aahet mg he value to aanto tikde tas tu kel nhiye mhnje 
    username: new FormControl('', [ Validators.required,Validators.minLength(4)] ), 
    password: new FormControl('',[Validators.required, Validators.maxLength(4)]),
    startdate: new FormControl('',[Validators.required]),
    enddate: new FormControl('',[Validators.required]),
    start: new FormControl('',[Validators.required]),
    end: new FormControl('',[Validators.required]),
 },
//  //{ validators:dateLessThan("startdate","enddate")}
 );
 
  

 

 name = ' '; 
 fullname: string= 'swati ';
 fname = 'swati';
   //lname= 'desale';
   data :string ="Swati ";
  
  welcome:string='Welcome'; 

username ( ) {

  return this.welcome;
}

   submit(){
     console.log(this.form.value);
     //console.log(this.range.value);
   }

   lname ='manohar';
  arr= ['ram', 'sham', 'rina' ];
  database={
     name: 'swati',
      sirname:'desale',
  };

  lastname()
  {
   return this.lname;
  }

   notify()
   {
     alert(" function is runing") 
     console.log("swati desale");
   }

   setName(event:any){
     //console.log(event); //use to check value on console (inspect element)
      this.name = event.target.value;    
      console.log(this.name);   
   }
   
   onkey(event:any){
       this.name += event.target.value +'|';
   }
   };



function toUpperCase(): string {
  throw new Error('Function not implemented.');
}

