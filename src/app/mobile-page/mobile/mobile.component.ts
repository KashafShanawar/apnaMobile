import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobileId: string = '1';
  mobileData: any = {
    phone_name: 'Samsung Galaxy S23 FE 5G',
    images: [
      'assets/images/mobile.jpg',
      'https://dummyimage.com/300x600/555/fff&text=Samsung+Image+2',
      'https://dummyimage.com/300x600/888/fff&text=Samsung+Image+3'
    ],
    colors: ['Cream', 'Graphite', 'Aqua', 'Leaf', 'Purple'],
    memory: ['128 GB', '256 GB']
  };
  statistics: any = {
    avg_price: 163440,
    lowest_price: 114000
  };
  selectedImage: string = this.mobileData.images[0];
  selectedColor: string = this.mobileData.colors[0];
  selectedMemory: string = this.mobileData.memory[0];
  selectedTab: string = 'vendors';

  ngOnInit() {}

  selectImage(image: string) {
    this.selectedImage = image;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectMemory(memory: string) {
    this.selectedMemory = memory;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  // Placeholder for share functionality
  share() {
    console.log("Sharing the product");
  }

  // Placeholder for price history functionality
  priceHistory() {
    console.log("Showing price history");
  }

  // Placeholder for compare functionality
  compare() {
    console.log("Comparing products");
  }
}
