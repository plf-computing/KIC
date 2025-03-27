import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SnackbarComponent } from "../../snackbar/snackbar.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ExcursionsService } from '../excursions.service';
import { environment } from '../../../environments/environments';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-excursions-form',
  imports: [SnackbarComponent, NgFor, ReactiveFormsModule,NgIf],
  templateUrl: './excursions-form.component.html',
  styleUrl: './excursions-form.component.css'
})
export class ExcursionsFormComponent implements OnInit,OnChanges {
  allExcursions:any;
  excursionForm!: FormGroup;
  whatsappNumber: string = environment.whatsappNumber;
  @Input() selectedExcursion: string = '';

  @ViewChild('checkin') checkinInput!: ElementRef;
  @ViewChild(SnackbarComponent) snackbar!: SnackbarComponent;
  
  constructor(private fb: FormBuilder, private excursionService:ExcursionsService){}

  ngOnInit():void{
    this.allExcursions = this.excursionService.getExcursions();

    this.excursionForm = this.fb.group({
      name:['',Validators.required],
      excursion: [''],
      adults: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
      children: [''],
      departure: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      message: ['', [Validators.maxLength(500)]]
    });

     
  if (this.selectedExcursion) {
    this.excursionForm.controls['excursion'].setValue(this.selectedExcursion);
  }
  
  }



  openDatePicker() {
    if (this.checkinInput) {
      this.checkinInput.nativeElement.showPicker();
    }
  }

  onSubmit() {
    this.excursionForm.markAllAsTouched(); 
  
    if (this.excursionForm.invalid) {
      this.snackbar.message = 'Please fill the required fields correctly!';
      this.snackbar.type = 'error';
      this.snackbar.showSnackbar();
      return; 
    }
  
    const formValues = this.excursionForm.value;
  
    const message = `Hello, I am interested in a safari booking!
    Name: ${formValues.name}
    Email: ${formValues.email}
    Number of Adults: ${formValues.adults}
    Number of Children: ${formValues.children}
    Excursion: ${formValues.excursion}
    Departure Date: ${formValues.departure}
    Phone Number: ${formValues.phone}
    Message: ${formValues.message || "No additional message"}`;
  
    const whatsappURL = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    this.snackbar.message = 'Request sent successfully!';
    this.snackbar.type = 'success';
    this.snackbar.showSnackbar();
    this.excursionForm.reset();
    
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 2000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedExcursion'] && this.excursionForm) {
      this.excursionForm.patchValue({ excursion: this.selectedExcursion });
    }
  }
  

}
