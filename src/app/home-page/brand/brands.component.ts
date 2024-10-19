import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandComponent {
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

  showLeftButton = false;

  brands = [
    { name: 'Apple', logo: 'assets/images/apple.jpg' },
    { name: 'Samsung', logo: 'assets/images/samsung.png' },
    { name: 'Huawei', logo: 'assets/images/huawei.jpg' },
    { name: 'Xiaomi', logo: 'assets/images/xiaomi.png' },
    { name: 'Vivo', logo: 'assets/images/vivo.png' },
    { name: 'Infinix', logo: 'assets/images/infinix.jpg' },
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
