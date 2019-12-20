import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './modules/dashboard-container/dashboard-container.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: DashboardContainerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
