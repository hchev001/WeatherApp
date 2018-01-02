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

  currentZipcode: string;
  currentWeather: Weather;
  constructor(
    private OpenWeather: WeatherService,
    private ZipSrvc: ZipServiceService
  ) {}

  ngOnInit() {
    this.ZipSrvc.userZipcode$.subscribe(zipcode => this.currentZipcode = zipcode);
  }

  /**
   * Subscribes to the http observable to receive a Weather object
   * @param zipcode the zipcode to lookup weather of
   */
  getWeather(zipcode: any): void {
    this.OpenWeather.GetWeather(zipcode)
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
    console.log('HandleZip is working');
    console.log('The current zipcode is: ' + this.currentZipcode);
    this.getWeather(this.currentZipcode);
  }

}
