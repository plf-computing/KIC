import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsDetailComponent } from './excursions-detail.component';

describe('ExcursionsDetailComponent', () => {
  let component: ExcursionsDetailComponent;
  let fixture: ComponentFixture<ExcursionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcursionsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
