import { NgModule } from '@angular/core';
import { EntityContainerRoutingModule } from './entityContainer-routing.module';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { EntityContainerComponent } from './entity-container/entity-container.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MultipleItemsCarouselComponent } from '../multiple-items-carousel/multiple-items-carousel.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    MultipleItemsCarouselComponent,
    EntityContainerComponent
  ],
  imports: [
    CommonModule, // ngIf, ngFor..
    FormsModule,  // ngModel
    SlickCarouselModule, // Carousel
    EntityContainerRoutingModule
  ],
  providers: [ ],
})
export class EntityContainerModule { }
