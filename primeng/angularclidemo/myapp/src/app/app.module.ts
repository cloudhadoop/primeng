import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { ButtonModule } from 'primeng/components/button/button';// added this

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule// added this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
