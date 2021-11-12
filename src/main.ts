import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) //ithe boostrapmodule madhe ky aahe appmodule -- he ky asat root module asat mahnje nemka ky ki inbuild ha component generate houn milto ani tyachya routing madhe baki components asata ok 
  .catch(err => console.error(err));  // appmodule la select karun ctrl+f12 dab 


  