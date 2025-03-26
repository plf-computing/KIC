import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsFormComponent } from './excursions-form.component';

describe('ExcursionsFormComponent', () => {
  let component: ExcursionsFormComponent;
  let fixture: ComponentFixture<ExcursionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcursionsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
