import { Component, OnInit } from '@angular/core';
import { SafariService } from './safari.service';
import { RouterLink } from '@angular/router';
import { SafariSliderComponent } from "../safari-slider/safari-slider.component";

@Component({
  selector: 'app-safaris',
  imports: [RouterLink, SafariSliderComponent],
  templateUrl: './safaris.component.html',
  styleUrl: './safaris.component.css'
})
export class SafarisComponent implements OnInit {
  constructor(private safariService:SafariService){}

  safaris:any[]=[];
  airSafaris:any[]=[];
  
  

  ngOnInit(): void {
    this.safaris = this.safariService.getSafaris().map(safari => ({
      ...safari,
      slug: this.generateSlug(safari.title) // ✅ Generate a URL-friendly slug
    }));
    this.airSafaris = this.safariService.getAllAirSafaris().map(airSafari => ({
      ...airSafari,
      slug: this.generateSlug(airSafari.name)
    }))

  }

  generateSlug(text: string): string {
    return text
    .toLowerCase()
    .replace(/-/g, '')  // ✅ Remove existing dashes
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, '');
  }
 

}
