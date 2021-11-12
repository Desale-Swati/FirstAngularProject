import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApicallSwatiComponent } from './apicall-swati/apicall-swati.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { GetDataApiComponent } from './get-data-api/get-data-api.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewformComponent } from './newform/newform.component';
import { PractiseReactiveFormComponent } from './practise-reactive-form/practise-reactive-form.component';
import { PractiseapiComponent } from './practiseapi/practiseapi.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ServicecompnentComponent } from './servicecompnent/servicecompnent.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StyelBindingComponent } from './styel-binding/styel-binding.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [

  { path : 'about' , component: AboutComponent} , 
  { path : 'home', component: HomeComponent },
  { path : 'reactiveform', component: ReactiveformComponent },
  { path : 'header', component: HeaderComponent },
  { path : 'style', component: StyelBindingComponent},
  { path : 'practice_reactive_form', component: PractiseReactiveFormComponent},
  { path : 'form', component: FormComponent },
  { path : 'newform', component: NewformComponent },
  { path : 'conditions', component: ConditionsComponent },
  { path : 'api', component: GetDataApiComponent},
  { path : 'newapi', component:ApicallSwatiComponent} ,
  { path : 'practiseapi', component: PractiseapiComponent},
  { path : 'sidenavbar', component: SidenavComponent},
  { path : 'footer', component: FooterComponent },
  { path : 'templatedriven', component: TemplateDrivenComponent }, 
  { path : 'servicecompo', component: ServicecompnentComponent }
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
