import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendor: any = {}; 
  vendorPhones: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.vendor = {
      vendor_name: 'Shandar Mobile Mart',
      location: 'Hafeez Center, Shop No. 22, Lahore',
      phone_number1: '+92 336 6444777',
      phone_number2: '+92 300 1234567',
      about_us: 'Best mobile shop in Lahore with a variety of smartphones and accessories.',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79i4uFrFAc6dSjoa6zqfmK_oS-UgPd6WGiA&s'  // Use a placeholder image or URL
    };

    this.vendorPhones = [
      {
        phone_name: 'Samsung Galaxy M13',
        price: 32999,
        memory: '64GB',
        condition: 'New',
        image_url: 'https://via.placeholder.com/100'
      },
      {
        phone_name: 'Samsung Galaxy M33',
        price: 49999,
        memory: '128GB',
        condition: 'Used',
        image_url: 'https://via.placeholder.com/100'
      },
      {
        phone_name: 'Apple iPhone 13 Pro',
        price: 234999,
        memory: '256GB',
        condition: 'New',
        image_url: 'https://via.placeholder.com/100'
      },
      {
        phone_name: 'Apple iPhone 13 Pro',
        price: 234999,
        memory: '256GB',
        condition: 'New',
        image_url: 'https://via.placeholder.com/100'
      },
      {
        phone_name: 'Apple iPhone 13 Pro',
        price: 234999,
        memory: '256GB',
        condition: 'New',
        image_url: 'https://via.placeholder.com/100'
      }
    ];
  }
}
