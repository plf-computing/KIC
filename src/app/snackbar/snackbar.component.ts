import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  imports: [NgIf,NgClass],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent {

  @Input() message:string = '';
  @Input() type: 'success'| 'error'= 'success';
  show:boolean = false;

  showSnackbar(){
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 7000); 
  }
}
