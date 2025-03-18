import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { DiscoverComponent } from "./discover/discover.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, DiscoverComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
