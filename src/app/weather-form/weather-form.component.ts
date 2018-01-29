import { GeoEncodingService } from './../shared/geo-encoding.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ZipServiceService } from '../zip-service.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
  @Output() zipsubmit: EventEmitter<any>;

  // our form
  public form = new FormGroup({
    zipcode: new FormControl('', [Validators.minLength(5), Validators.required])
  });

  get zipcode() {
    return this.form.get('zipcode');
  }

  constructor(
    private ZipSrvc: ZipServiceService,
    private GeoEncode: GeoEncodingService
  ) {
    this.zipsubmit = new EventEmitter();
  }

  ngOnInit() {
  }

  /**
   * Uses the ipServiceService to pass the results of the GeoEncoding
   * asynch call to the dashboard component
   */
  public OnFormSubmit() {
    if (this.form.valid) {
      this.GeoEncode.ZipCodeLocation(this.zipcode.value)
        .subscribe(
          payload => {
            this.ZipSrvc.submitEncoding(payload);
            console.log(payload);
            this.zipsubmit.emit();
          },
          error => {
            console.log(error);
          }
        );
    }
  }
}
