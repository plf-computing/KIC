import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SafariService } from '../safari.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
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
      name:['',Validators.required],
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

  public sendEmail(e: Event) {
    e.preventDefault();
  
     // Check if the form is valid
     if (this.safariForm.invalid) {
      // Mark all fields as touched to show validation errors
      this.safariForm.markAllAsTouched();
      return; // Exit if the form is invalid
    }
  
  
      emailjs
      .sendForm('service_8i43k9a', 'template_s0fjr3i', e.target as HTMLFormElement, 
        'y7gT77GKEiOEsXfBN',
      )
      .then(
        () => {
          this.snackbar.message = 'Request sent successfully!'
          this.snackbar.type = 'success'
          this.snackbar.showSnackbar()
          this.safariForm.reset()
        },
        (error) => {
          this.snackbar.message = 'Failed to send email. Please try again.';
          this.snackbar.type = 'error';
          this.snackbar.showSnackbar();
         
        },
      );
    }

}
