import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trending-phones',
  templateUrl: './trending-phones.component.html',
  styleUrls: ['./trending-phones.component.css']
})
export class TrendingPhonesComponent {
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

  showLeftButton = false;

  phones = [
    {
      name: 'Galaxy S22 (4GB | 64 GB)',
      imageUrl: 'assets/images/mobile.jpg',
      price: 'Rs 32999',
      discount: '55% OFF',
      tag: 'Lowest Price!'
    },
    {
      name: 'Galaxy M53 (4GB | 64 GB)',
      imageUrl: 'assets/images/mobile.jpg',
      price: 'Rs 32999',
      discount: '55% OFF',
      tag: 'Lowest Price!'
    },
    {
      name: 'Galaxy M33 (4GB | 64 GB)',
      imageUrl: 'assets/images/mobile.jpg',
      price: 'Rs 32999',
      discount: '55% OFF',
      tag: 'Lowest Price!'
    },
    {
      name: 'Galaxy M13 (4GB | 64 GB)',
      imageUrl: 'assets/images/mobile.jpg',
      price: 'Rs 32999',
      discount: '55% OFF',
      tag: 'Lowest Price!'
    },
    {
      name: 'Galaxy M12 (4GB | 64 GB)',
      imageUrl: 'assets/images/mobile.jpg',
      price: 'Rs 32999',
      discount: '55% OFF',
      tag: 'Lowest Price!'
    }
  ];

  scrollLeft(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
    if (container.scrollLeft <= 300) {
      this.showLeftButton = false;
    }
  }

    scrollRight(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
    this.showLeftButton = true;
  }
}
