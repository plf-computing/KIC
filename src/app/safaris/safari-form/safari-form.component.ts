import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SafariService } from '../safari.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SnackbarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'app-safari-form',
  imports: [FormsModule, NgFor, ReactiveFormsModule, NgIf, SnackbarComponent],
  templateUrl: './safari-form.component.html',
  styleUrl: './safari-form.component.css'
})
export class SafariFormComponent {
  allSafaris:any;
  safariForm!: FormGroup;
  whatsappNumber: string = "254792264187";

  @ViewChild('checkin') checkinInput!: ElementRef;
  @ViewChild(SnackbarComponent) snackbar!: SnackbarComponent;
  
  constructor(private fb: FormBuilder, private safariService:SafariService){}

  ngOnInit():void{
    this.allSafaris = this.safariService.getSafaris();

    this.safariForm = this.fb.group({
      safari: ['', Validators.required],
      adults: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
      children: ['',[Validators.min(1), Validators.max(50)]],
      departure: ['', Validators.required],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      message: ['', [Validators.maxLength(500)]]
    });
  
  }


  openDatePicker() {
    if (this.checkinInput) {
      this.checkinInput.nativeElement.showPicker();
    }
  }

  onSubmit() {
    this.safariForm.markAllAsTouched(); 
  
    if (this.safariForm.invalid) {
      this.snackbar.message = 'Please fill the required fields correctly!';
      this.snackbar.type = 'error';
      this.snackbar.showSnackbar();
      return; 
    }
  
    const formValues = this.safariForm.value;
  
    const message = `Hello, I am interested in your safari booking!%0A
    Email: ${formValues.email}%0A
    Number of Adults: ${formValues.adults}%0A
    Number of Children: ${formValues.children}%0A
    Safari: ${formValues.safari}%0A
    Departure Date: ${formValues.departure}%0A
    Phone Number: ${formValues.phone}%0A
    Message: ${formValues.message || "No additional message"}`;
  
    const whatsappURL = `https://wa.me/${this.whatsappNumber}?text=${message}`;
  
    this.snackbar.message = 'Request sent successfully!';
    this.snackbar.type = 'success';
    this.snackbar.showSnackbar();
    this.safariForm.reset();
    
    window.open(whatsappURL, '_blank');
  }

}
