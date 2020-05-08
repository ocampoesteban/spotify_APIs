import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleItemsCarouselComponent } from './multiple-items-carousel.component';

describe('MultipleItemsCarouselComponent', () => {
  let component: MultipleItemsCarouselComponent;
  let fixture: ComponentFixture<MultipleItemsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleItemsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleItemsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
