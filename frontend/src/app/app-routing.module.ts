import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authorization/login/login.component';
import { AuthGuardService } from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: () => import('./components/entity-container/entityContainer.module').then(m => m.EntityContainerModule),
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
