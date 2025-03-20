import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { DiscoverComponent } from "./discover/discover.component";
import { WhyUsComponent } from "./why-us/why-us.component";
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, DiscoverComponent, WhyUsComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
