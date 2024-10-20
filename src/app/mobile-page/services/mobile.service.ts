import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private baseUrl: string = 'https://yourapi.com';  // Replace with your actual API base URL

  constructor(private http: HttpClient) { }

  // Method to get mobile details by ID
  getMobileDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/phone/${id}`);
  }

  // Method to get mobile statistics by ID
  getMobileStatistics(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/phone/${id}/statistics`);
  }
}
