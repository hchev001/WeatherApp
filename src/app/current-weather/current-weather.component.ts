import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() weather: Weather;

  currentTemperature = 70;
  precipitation = 80;

  constructor() { }

  ngOnInit() {
    if (this.weather && this.weather.current_observation) {
      this.currentTemperature = this.weather.current_observation
                                  .temp_f;
    }
  }

}
