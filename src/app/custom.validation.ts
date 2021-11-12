import {  ValidatorFn ,FormGroup, AbstractControl } from "@angular/forms";


//export function dateLessThan( startdate:string, enddate:string ): ValidatorFn {
  //  return (Cform:FormGroup): { [key: string]: boolean } | null => {
    
    //   const startdatevalue = Cform.get(startdate).value;
    //   const enddatevalue = Cform.get(enddate).value;

    //   if (!startdatevalue || !enddatevalue) {
    //     return { missing: true };
    //   }

    //  const sdate = new Date (startdatevalue);
      //const edate = new Date (enddatevalue);

    //   if ( sdate >= edate) {
          
    //       const err = {dateLessThan:true};
    //       form.get(enddate).setErrors(err);
    //       return err;
    //   } 
     
    //};

  //}

  //  dateValidator(): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} | null => {
     
  //     const startdatevalue = control.get('startdate');
  //     const enddatevalue = control.get('enddate');

  //      if (!startdatevalue || !enddatevalue) {
  //       return { missing: true };
  //     }

  //      const sdate =  (startdatevalue);
  //      const edate =  (enddatevalue);

      
  //   }
  // }