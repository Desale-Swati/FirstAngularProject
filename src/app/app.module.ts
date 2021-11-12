import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';    
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StyelBindingComponent } from './styel-binding/styel-binding.component';
import { PractiseReactiveFormComponent } from './practise-reactive-form/practise-reactive-form.component';
import { FormComponent } from './form/form.component';
import { NewformComponent } from './newform/newform.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { GetDataApiComponent } from './get-data-api/get-data-api.component';

import { HttpClientModule } from '@angular/common/http';
import { ApicallSwatiComponent } from './apicall-swati/apicall-swati.component';
import { PractiseapiComponent } from './practiseapi/practiseapi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import{MatFormFieldModule} from '@angular/material/form-field';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ServicecompnentComponent } from './servicecompnent/servicecompnent.component';
//import {matRangePicker}from '@angular/material/rangepicker';
 
 
@NgModule({
  declarations: [
    AppComponent,//jevha project banta theva he automatic import zalel asat correct hm so ithe jaych so app-html file run hote kalal ka 
    ReactiveformComponent, 
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    StyelBindingComponent,
    PractiseReactiveFormComponent,
    FormComponent,
    NewformComponent,
    ConditionsComponent,
    GetDataApiComponent,
    ApicallSwatiComponent,
    PractiseapiComponent,
    SidenavComponent,
    FooterComponent,
    TemplateDrivenComponent,
    ServicecompnentComponent,
     

   
 
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule, 
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
    
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
