import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Weather } from './weather';

@Injectable()
export class WeatherService {

  weatherApiUrl = 'https://api.darksky.net/forecast/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Uses Darksky Weather API to retrieve an areas weather based on latitude and logitude
   * @param zipcode a zipcode in the United States
   */
  GetWeatherFromCardinals(lat: number, lng: number): Observable<any> {
    const latitude = lat;
    const longitude = lng;
    const endpoint = this.weatherApiUrl + this.ApiKey() + '/' + latitude + ',' + longitude;
    return this.http.get<Weather>(endpoint);
  }

  // returns the DarkSky API key
  private ApiKey(): string {
    return 'a4f561ec02ea2ccf6b2c65e99321705d';
  }
}
