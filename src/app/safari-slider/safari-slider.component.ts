import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-safari-slider',
  imports: [NgIf,NgFor],
  templateUrl: './safari-slider.component.html',
  styleUrl: './safari-slider.component.css'
})
export class SafariSliderComponent {
  images = [
    'images/cheetah.jpeg',
    'images/lioness.jpeg',
    'images/cheetahs.jpeg',
    'images/elepnt.webp',
    'images/airmara.jpg',
    'images/leop.jpg',
    'images/flmng.jpg',
    'images/lionn.jpg'
    

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

