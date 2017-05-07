import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TinymceComponent } from './tinymce/tinymce.component';
import { PantallaComponent } from './pantalla/pantalla.component';
import { TinyDirective } from './tiny.directive';

@NgModule({
  declarations: [
    AppComponent,
    TinymceComponent,
    PantallaComponent,
    TinyDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
