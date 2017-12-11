import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [{
  
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },{
    path:'home',
    component:HomeComponent
  },
  {
    path:'quienes-somos',
    component:QuienesSomosComponent
  }
  ,
  {
    path:'que-hacemos',
    component:QueHacemosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
