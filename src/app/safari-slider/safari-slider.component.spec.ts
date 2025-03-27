import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariSliderComponent } from './safari-slider.component';

describe('SafariSliderComponent', () => {
  let component: SafariSliderComponent;
  let fixture: ComponentFixture<SafariSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
