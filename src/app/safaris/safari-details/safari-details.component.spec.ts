import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariDetailsComponent } from './safari-details.component';

describe('SafariDetailsComponent', () => {
  let component: SafariDetailsComponent;
  let fixture: ComponentFixture<SafariDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
