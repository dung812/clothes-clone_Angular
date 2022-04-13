import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideProductSmallComponent } from './slide-product-small.component';

describe('SlideProductSmallComponent', () => {
  let component: SlideProductSmallComponent;
  let fixture: ComponentFixture<SlideProductSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideProductSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideProductSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
