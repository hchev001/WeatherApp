import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Weather } from './weather';
import { Jsonp, Response } from '@angular/http';

@Injectable()
export class WeatherService {

 // weatherApiUrl = 'https://api.darksky.net/forecast/';
  weatherApiUrl = 'http://api.wunderground.com/api/';
  constructor(
    private http: HttpClient,
    private jsonp: Jsonp
  ) { }

  /**
   * Uses Darksky Weather API to retrieve an areas weather based on latitude and logitude
   * @param zipcode a zipcode in the United States
   */
  GetWeatherFromCardinals(lat: number, lng: number): Observable<Weather> {
    const latitude = lat;
    const longitude = lng;
    const endpoint = this.weatherApiUrl + this.ApiKey() + '/geolookup/conditions/q/' + latitude + ',' + longitude + '.json';
    return this.http.get<Weather>(endpoint);
  }

  // returns the DarkSky API key
  private ApiKey(): string {
    return 'cd601d0cc5847f06';
  }
}
