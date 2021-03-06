import { GeoEncoding, ResultsEntity, Geometry } from './../GeoEncoding';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
import { error } from 'selenium-webdriver';
import { ZipServiceService } from '../zip-service.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css'],
  providers: [ZipServiceService]
})
export class WeatherDashboardComponent implements OnInit {

  userEncoding: GeoEncoding;
  currentWeather: Weather;
  constructor(
    private DarkSky: WeatherService,
    private ZipSrvc: ZipServiceService
  ) {}

  ngOnInit() {
    this.ZipSrvc.userZipcode$.subscribe(encoding => this.userEncoding = encoding);
  }

  /**
   * Subscribes to the http observable to receive a Weather object
   * @param lat Latitude coordinate
   * @param lng Longitude coordinate
   */
  getWeather(lat: number, lng: number ): void {
    this.DarkSky.GetWeatherFromCardinals(lat, lng)
      .subscribe(
        weather => {
          this.currentWeather = weather;
          console.log(this.currentWeather);
        },
        err => console.log(err)
      );
  }

  /**
   * Calls the getWeather function upon the user submission of a zipcode
   */
  handleZip(): void {
    console.log('The current cardinal coordinates are ' + this.userEncoding.results[0].geometry.location.lat + ' ' 
    + this.userEncoding.results[0].geometry.location.lng);
    const latitude = this.userEncoding.results[0].geometry.location.lat;
    const longitude = this.userEncoding.results[0].geometry.location.lng;
    this.getWeather(latitude, longitude);


  }

}
