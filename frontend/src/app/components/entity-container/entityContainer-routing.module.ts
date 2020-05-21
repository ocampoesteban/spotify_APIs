import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityContainerComponent } from './entity-container/entity-container.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { RockerComponent } from 'src/app/components/rocker/rocker.component';
import { ErrorComponent } from '../error/error.component';


const routes: Routes = [
  {
    path: '',
    component: EntityContainerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'artist/:artistId', component: RockerComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'search', component: SearchComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityContainerRoutingModule { }
