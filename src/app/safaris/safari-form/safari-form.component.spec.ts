import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariFormComponent } from './safari-form.component';

describe('SafariFormComponent', () => {
  let component: SafariFormComponent;
  let fixture: ComponentFixture<SafariFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
