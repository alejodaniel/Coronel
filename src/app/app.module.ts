import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/Footer.component';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
  export class AppModule {}


