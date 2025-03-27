import { Component, HostListener } from '@angular/core';
import { ExcursionsService } from './excursions.service';
import { NgFor, NgIf } from '@angular/common';
import { ExcursionsFormComponent } from "./excursions-form/excursions-form.component";
import { ExcursionSliderComponent } from "../excursion-slider/excursion-slider.component";

@Component({
  selector: 'app-excursions',
  imports: [NgFor, NgIf, ExcursionsFormComponent, ExcursionSliderComponent],
  templateUrl: './excursions.component.html',
  styleUrl: './excursions.component.css'
})
export class ExcursionsComponent {
  selectedExcursion: string = '';
  excursions: any[] = [];
  excursionItenary: any;
  isVisible: boolean[] = [];
 

  images = [
    'images/146.jpg',
    'images/147.jpg',
    'images/sardd.jfif',
    'images/zipline.jpg',
    'images/quad.jpg',
    'images/dhow.jpg',
  ];

  constructor(private excursionService: ExcursionsService) {}

  ngOnInit(): void {
    this.excursions = this.excursionService.getExcursions();
    this.excursionItenary = this.excursionService.getItenaries();
    this.isVisible = new Array(this.excursions.length).fill(false);

   
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const elements = document.querySelectorAll('.excursion-image');
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        this.isVisible[index] = true;
      }
    });
  }

  


  scrollToForm(excursionTitle: string) {
    this.selectedExcursion = excursionTitle; 
    setTimeout(() => {
      const formElement = document.getElementById('excursionForm');
      if (formElement) {
        const offset = 100; 
        const elementPosition = formElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    });
  }
}
