import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = 'https://api.example.com'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  getVendorDetails(vendorName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/vendor/${vendorName}/`);
  }

  getVendorPhones(vendorName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/vendor/${vendorName}/phones/`);
  }
}
