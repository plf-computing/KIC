import { Component, OnInit } from '@angular/core';
import { SafariService } from './safari.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-safaris',
  imports: [RouterLink],
  templateUrl: './safaris.component.html',
  styleUrl: './safaris.component.css'
})
export class SafarisComponent implements OnInit {
  constructor(private safariService:SafariService){}

  safaris:any[]=[];
  

  ngOnInit(): void {
    this.safaris = this.safariService.getSafaris().map(safari => ({
      ...safari,
      slug: this.generateSlug(safari.title) // ✅ Generate a URL-friendly slug
    }));
  }

  generateSlug(title: string): string {
    return title
    .toLowerCase()
    .replace(/-/g, '')  // ✅ Remove existing dashes
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, '');
  }

}
