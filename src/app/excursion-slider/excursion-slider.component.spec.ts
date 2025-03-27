import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionSliderComponent } from './excursion-slider.component';

describe('ExcursionSliderComponent', () => {
  let component: ExcursionSliderComponent;
  let fixture: ComponentFixture<ExcursionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcursionSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
