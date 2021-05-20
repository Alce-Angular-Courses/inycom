import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
// import { HomeModule } from './home/home.module';

registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    // HomeModule
  ],
  providers: [
    {provide: LOCALE_ID , useValue: 'es' }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
