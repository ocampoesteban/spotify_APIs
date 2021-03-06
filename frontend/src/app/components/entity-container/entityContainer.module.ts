import { NgModule } from '@angular/core';
import { EntityContainerRoutingModule } from './entityContainer-routing.module';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { EntityContainerComponent } from './entity-container/entity-container.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultipleItemsCarouselComponent } from '../../shared/multiple-items-carousel/multiple-items-carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorComponent } from '../error/error.component';
import { RockerComponent } from '../rocker/rocker.component';

@NgModule({
  declarations: [
    RockerComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    MultipleItemsCarouselComponent,
    ErrorComponent,
    EntityContainerComponent
  ],
  imports: [
    CommonModule, // ngIf, ngFor..
    FormsModule,  // ngModel
    SharedModule,
    EntityContainerRoutingModule
  ],
  providers: [ ],
})
export class EntityContainerModule { }
