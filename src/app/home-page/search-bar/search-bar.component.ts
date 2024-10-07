import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  budgetMin: number = 50; // Default minimum value
  budgetMax: number = 200; // Default maximum value
  
}
