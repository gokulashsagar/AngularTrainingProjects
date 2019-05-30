import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotherComponent } from './family/mother/mother.component';
import { Child1Component } from './family/mother/child1/child1.component';
import { Child2Component } from './family/mother/child2/child2.component';
import { NotFoundComponent } from './family/not-found/not-found.component';
import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TaskComponent } from './task/task.component';
import { PipesComponent } from './pipes/pipes.component';
import { InbuiltPipeComponent } from './pipes/inbuilt-pipe/inbuilt-pipe.component';
import { CustomSortComponent } from './pipes/custom-sort/custom-sort.component';
import { Service1ConsumeComponent } from './service1-consume/service1-consume.component';
import { ConsumRremoteComponent } from './consum-rremote/consum-rremote.component';
import { UpdateFriendComponent } from './update-friend/update-friend.component';
import { ParentComponent } from './EventBinding/parent/parent.component';
import { BoostrapComponent } from './boostrap/boostrap.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'father',
    pathMatch: 'full'
  },
  {
    path: 'father',
    component: FatherComponent,
    children: [
      {
        path: 'mother',
        component: MotherComponent,
        children: [
          {
            path:'child2',
            component:Child2Component
          }
        ]
      },
      {
        path: 'service1',
       component: Service1ConsumeComponent
      },
      {
        path: 'templateForm',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'remote',
        component:ConsumRremoteComponent
      }
      ,
      {
        path:'reactiveForm', 
        component: ReactiveFormComponent  
      },
      {
        path: 'Bootstrap',
        component: BoostrapComponent
      },
      {
        path:'task',
        component: TaskComponent     
      },
      {
        path: 'eventBind',
        component : ParentComponent
      },
      {
        path:'pipe',
        component: PipesComponent,
        children: [{
          path:'inbuiltPipe',
          component:InbuiltPipeComponent
        } ,
        {
          path:'customSortPipe',
          component:CustomSortComponent 
        }
        
        ]

      }]
    },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'updatefriend/:id',
    component: UpdateFriendComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
