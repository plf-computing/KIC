import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgIf,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;
  isDropDownOpen = false;

  showMenu(){
    this.isOpen = !this.isOpen;
  }
  showDropdown() {
    this.isDropDownOpen = true; // Show dropdown when hovering
  }

  hideDropdown() {
    this.isDropDownOpen = false; // Hide dropdown when mouse leaves
  }
 

  whenClicked(){
    this.isOpen = false;
    
  }
  whenDropDownClicked(){
    this.isDropDownOpen = false;
  }
  

}
