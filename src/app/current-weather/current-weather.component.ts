import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnChanges {

  @Input() weather: Weather;

  currentTemperature = 70;
  precipitation = 80;
  feelslike_f = '32';

  constructor() { }

  ngOnChanges() {
    if (this.weather && this.weather.current_observation) {
      this.currentTemperature = this.weather.current_observation
                                  .temp_f;
      this.feelslike_f = this.weather.current_observation.feelslike_f;
    }
  }

}
