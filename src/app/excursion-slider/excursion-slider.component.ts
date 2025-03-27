import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-excursion-slider',
  imports: [NgIf,NgFor],
  templateUrl: './excursion-slider.component.html',
  styleUrl: './excursion-slider.component.css'
})
export class ExcursionSliderComponent {
  images = [
    'images/sardd.jfif',
    'images/146.jpg',
    'images/147.jpg',
    'images/marafa.jpg',
    'images/',
    'images/',
    'images/',
    'images/'
    

  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  getDisplayedImages(): string[] {
    return [
      this.images[this.currentIndex],
      this.images[(this.currentIndex + 1) % this.images.length],
      this.images[(this.currentIndex + 2) % this.images.length],
      this.images[(this.currentIndex + 3) % this.images.length],
    ];
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
