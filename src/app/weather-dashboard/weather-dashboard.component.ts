import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {

  currentWeather: Weather;
  constructor(
    private OpenWeather: WeatherService
  ) { }

  ngOnInit() {
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

}
