import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SaludcomunitariaComponent } from './saludcomunitaria/saludcomunitaria.component';
import { VinculosolComponent } from './vinculosol/vinculosol.component';
import { EducacionFormComponent } from './educacion-form/educacion-form.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { EconomiaSolComponent } from './economia-sol/economia-sol.component';

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
    component:QueHacemosComponent,
   
  }
,
{
  path: 'salud-comunitaria', 
  component: SaludcomunitariaComponent
},
{
  path: 'vinculo-solidario', 
  component: VinculosolComponent
},
{
  path: 'educacion-formacion', 
  component: EducacionFormComponent
}
,
{
  path: 'produccion', 
  component: ProduccionComponent
}
,
{
  path: 'economia-solidaria', 
  component: EconomiaSolComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }