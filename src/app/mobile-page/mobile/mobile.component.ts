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
      'https://dummyimage.com/300x600/000/fff&text=Samsung+Galaxy+S23+FE',
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
  selectedColor: string = '128 GB';
  selectedMemory: string = 'Cream';
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
}
