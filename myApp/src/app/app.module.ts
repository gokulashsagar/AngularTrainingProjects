import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponentComponent } from './Family/father-component/father-component.component';
import { MotherComponent } from './Family/mother/mother.component';
import { Child1Component } from './Family/child1/child1.component';
import { Child2Component } from './Family/child2/child2.component';
import { SuperComponent } from './directive/super/super.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponentComponent,
    MotherComponent,
    Child1Component,
    Child2Component,
    SuperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
