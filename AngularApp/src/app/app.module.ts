import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { Child1Component } from './family/mother/child1/child1.component';
import { Child2Component } from './family/mother/child2/child2.component';
import { NotFoundComponent } from './family/not-found/not-found.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import {ReactiveFormsModule} from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { PipesComponent } from './pipes/pipes.component';
import { InbuiltPipeComponent } from './pipes/inbuilt-pipe/inbuilt-pipe.component';
import { CustomSortComponent } from './pipes/custom-sort/custom-sort.component';
import { SortPipe } from './pipes/pipes/sort.pipe';
import { SortNumberPipe } from './pipes/pipes/sort-number.pipe';
import { Service1ConsumeComponent } from './service1-consume/service1-consume.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsumRremoteComponent } from './consum-rremote/consum-rremote.component';
import { UpdateFriendComponent } from './update-friend/update-friend.component';
import { ParentComponent } from './EventBinding/parent/parent.component';
import { ChildComponent } from './EventBinding/child/child.component';
import { BoostrapComponent } from './boostrap/boostrap.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    Child1Component,
    Child2Component,
    NotFoundComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    TaskComponent,
    PipesComponent,
    InbuiltPipeComponent,
    CustomSortComponent,
    SortPipe,
    SortNumberPipe,
    Service1ConsumeComponent,
    ConsumRremoteComponent,
    UpdateFriendComponent,
    ParentComponent,
    ChildComponent,
    BoostrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
