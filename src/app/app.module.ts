import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {APP_ROUTING} from '@angulaar/routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CodingDesignComponent } from './coding-design/coding-design.component';
import { DocumentationComponent } from './documentation/documentation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CodingDesignComponent, DocumentationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
