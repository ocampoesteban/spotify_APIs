import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  { 
    path: '',
    loadChildren: () => import('./modules/entity-container/entityContainer.module').then(m => m.EntityContainerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
