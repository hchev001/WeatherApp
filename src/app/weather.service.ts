import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Weather } from './weather';

@Injectable()
export class WeatherService {

  weatherApiUrl = 'api.openweathermap.org/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Uses OpenWeather API end point to retrieve the weather based on the user's zip code
   * @param zipcode a zipcode in the United States
   */
  GetWeather(zipcode: number): Observable<Weather> {
    const countryCode = 'us';
    const apiKey = '&APPID=11ed78ef6542309b2d90eecdc31c4dac';
    const imperialUnits = '&units=imperial';
    const endpoint = this.weatherApiUrl + 'data/2.5/weather?zip=' + zipcode + ',' + countryCode + apiKey + imperialUnits;
    return this.http.get<Weather>(endpoint);
  }
}
