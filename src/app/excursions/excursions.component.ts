import { Component } from '@angular/core';
import { ExcursionsService } from './excursions.service';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-excursions',
  imports: [NgFor,NgIf],
  templateUrl: './excursions.component.html',
  styleUrl: './excursions.component.css'
})
export class ExcursionsComponent {
  constructor(private excursionService:ExcursionsService){}

  excursions:any[]=[];
  excursionItenary:any;

  ngOnInit(): void {
    this.excursions = this.excursionService.getExcursions();
    this.excursionItenary = this.excursionService.getItenaries()
  }


}
