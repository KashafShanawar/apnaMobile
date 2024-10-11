import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent {
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

  showLeftButton = false;

  vendors = [
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
