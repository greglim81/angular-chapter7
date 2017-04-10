import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent, LoginComponent   
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule   
  ],
  providers: [LoginService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
