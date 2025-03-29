import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafariService } from '../safari.service';
import { NgFor, NgIf } from '@angular/common';
import { SafariFormComponent } from "../safari-form/safari-form.component";
import { SafariSliderComponent } from "../../safari-slider/safari-slider.component";

@Component({
  selector: 'app-safari-details',
  imports: [NgFor, NgIf, SafariFormComponent, SafariSliderComponent],
  templateUrl: './safari-details.component.html',
  styleUrl: './safari-details.component.css'
})
export class SafariDetailsComponent implements OnInit {
  safaris: any;
  safariItenaries: any;
  airSafaris:any;

  images = [
    '/images/maraair.jpg',
    '/images/mara.jpeg',
    '/images/masai-mara.jpeg',
    '/images/mara-masai.jpeg',
    
  ];

  currentIndex = 0;
  slideInterval: any;

  


  constructor(private safariService:SafariService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.startAutoSlide();
    const slug = this.route.snapshot.paramMap.get('slug'); // Get slug from URL
  
    
  
    if (slug) {
      // Find matching Land Safari (by title)
      this.safaris = this.safariService.getSafaris().find(
        safari => this.generateSlug(safari.title) === slug
      );
  
      // Find matching Air Safari (by name)
      this.airSafaris = this.safariService.getAllAirSafaris().find(
        airSafari => this.generateSlug(airSafari.name) === slug
      );
  
      if (this.safaris) {
      this.loadItinerary();
    }

    if (this.airSafaris) {
      this.loadAirItenary();
    }
    }
  }
  

  loadItinerary() {
    if (this.safaris) {
      this.safariItenaries = this.safariService
        .getAllSafarisItenaries()
        .find(i => this.generateSlug(i.name) === this.generateSlug(this.safaris.title));
    }
  }

  loadAirItenary(){
    if(this.airSafaris){
      this.airSafaris = this.safariService.getAllAirSafaris().find(
        i => this.generateSlug(i.name) === this.generateSlug(this.airSafaris.name)
      )
    }
  }

  

  generateSlug(text: string): string {
    return text
    .toLowerCase()
    .replace(/-/g, '')  // ✅ Remove existing dashes
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, '');
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval); // Cleanup interval when component is destroyed
  }
}


