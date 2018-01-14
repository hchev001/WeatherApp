import { GeoEncoding } from './../GeoEncoding';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GeoEncodingService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Returns the Google API key for the GeoEncoding Service
   */
  private GeoEncodingKey(): string {
    return 'AIzaSyCQ-qEuIExQyWTIoSrl39B964yYne08-ZU';
  }

  /**
   * Uses Google's GeoEncoding service to retrieve cardinal coordinates based
   * on ZipCode
   * @param zip Zipcode used for retrieving geolocation coordinates
   */
  public ZipCodeLocation(zip: string): Observable<GeoEncoding> {
    const baseUrl = this.GeoBaseUrl();
    const key = this.GeoEncodingKey();
    const endpoint = baseUrl + 'address=' + zip + '&key=' + this.GeoBaseUrl();
    return this.http.get<GeoEncoding>(endpoint);
  }

  /**
   * Returns the base url for Google's GeoEncoding service
   */
  public GeoBaseUrl(): string {
    return 'http://maps.googleapis.com/maps/api/geocode/json?';
  }
}
