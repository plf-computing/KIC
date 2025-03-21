import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafariService } from '../safari.service';
import { NgFor, NgIf } from '@angular/common';
import { SafariFormComponent } from "../safari-form/safari-form.component";

@Component({
  selector: 'app-safari-details',
  imports: [NgFor, NgIf, SafariFormComponent],
  templateUrl: './safari-details.component.html',
  styleUrl: './safari-details.component.css'
})
export class SafariDetailsComponent implements OnInit {
  safaris: any;
  safariItenaries: any;

  constructor(private safariService:SafariService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('title'); // Get slug from URL

    if (slug) {
      // Find safari using slug instead of title
      this.safaris = this.safariService.getSafaris().find(
        safari => this.generateSlug(safari.title) === slug
      );

      if (this.safaris) {
        this.loadItinerary();
      } else {
        console.error('Safari not found:', slug);
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

  generateSlug(title: string): string {
    return title
    .toLowerCase()
    .replace(/-/g, '')  // ✅ Remove existing dashes
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, '');
  }
}


