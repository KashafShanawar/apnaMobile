import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trending-phones',
  templateUrl: './trending-phones.component.html',
  styleUrls: ['./trending-phones.component.css']
})
export class TrendingPhonesComponent {
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

  showLeftButton = false; // For hiding the left button initially

  // Scroll left function
  scrollLeft(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
    // Check if we are at the start after scrolling
    if (container.scrollLeft <= 300) {
      this.showLeftButton = false;
    }
  }

  // Scroll right function
  scrollRight(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
    // Make the left button visible after scrolling right
    this.showLeftButton = true;
  }
}
