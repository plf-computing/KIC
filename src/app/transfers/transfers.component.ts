import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-transfers',
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.css'
})
export class TransfersComponent {
  pickUp:string = ''
  dropOff:string = ''
  carSeater:string = ''
  date: string = ''
  time: string = ''

  name:string = ''
  phoneNumber: string = environment.whatsappNumber
  flightArrivalTime:string = ''
  airlineName:string = ''
  luggageAmount:string[]=[]

  pickUpLocations:string[]=['Watamu','Malindi Airport(MYD)', 'Mombasa Airport','SGR','Kilifi', 'Vipingo','South Coast','Lamu','Nairobi' ];
  dropOffLocations:string[]=['Watamu','Malindi Airport(MYD)', 'Mombasa Airport','SGR','Kilifi', 'Vipingo','South Coast','Lamu','Nairobi' ]
  carSeaterOptions:string[]=['4-Seater','7-Seater','11-seater']
  
  showSummary:boolean = false;
  isEditMode:boolean = false;

  toggleLuggage(luggage:string,event:Event){
    const isChecked = (event.target as HTMLInputElement).checked;
    if(isChecked){
      this.luggageAmount.push(luggage)
      }else{
        this.luggageAmount = this.luggageAmount.filter(item => item!== luggage)
        }
    }

    submitForm(){
      const message = `Hello,I would like to book a taxi transfer. \n\n` +
      `Name: ${this.name}\nPhoneNumber: ${this.phoneNumber}\nLuggage:${this.luggageAmount.join(',')}\n\n`+
      `Pick up location: ${this.pickUp}\nDrop off location: ${this.dropOff}\nCar seater:${this.carSeater}\nArrival Date: ${this.date}\nArrival Time: ${this.time}`
    
      const whatsappUrl = `https://wa.me/254789499089?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }

    editForm(){
      this.showSummary = false;
      this.isEditMode = true;
      setTimeout(() => {
        const formSection = document.getElementById('formSection');
        if (formSection) {
          const offset = -120; 
          const y = formSection.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);

      
    }
    
    reviewForm(){
      this.showSummary = true;
      this.isEditMode = false;
    
      setTimeout(() => {
        const summarySection = document.getElementById('summarySection');
        if (summarySection) {
          const offset = -120; 
          const y = summarySection.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }


}
