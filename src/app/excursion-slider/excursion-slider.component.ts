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
    'images/sardegna2.jpeg',
    'images/puffer.jpeg',
    'images/snorkel.jpeg',
    'images/choma.jpeg',
    'images/snorkelling.jpeg',
    'images/mangrove.jpeg',
    'images/dolphins.jpeg',
    'images/147.jpg'
    

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
