import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trending-phones',
  templateUrl: './trending-phones.component.html',
  styleUrls: ['./trending-phones.component.css']
})
export class TrendingPhonesComponent {
  // Use ViewChild to reference the scrollable container in the template
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

  // Scroll left function
  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300, // Adjust scroll distance
      behavior: 'smooth'
    });
  }

  // Scroll right function
  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300, // Adjust scroll distance
      behavior: 'smooth'
    });
  }
}
