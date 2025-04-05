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

  image = [
    '/images/exc2.jpg',
    '/images/exc3.jpg',
    '/images/exc4.jpg',
    '/images/exc.jpg',
    
  ];

  currentIndex = 0;
  slideInterval: any;


  constructor(private excursionService: ExcursionsService) {}

  ngOnInit(): void {
    this.startAutoSlide();
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
  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.image.length;
    }, 3000); // Change image every 3 seconds
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval); // Cleanup interval when component is destroyed
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
