import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
  @Output() zipsubmit: EventEmitter<any>;

  // our form
  private form = new FormGroup({
    zipcode: new FormControl('', [Validators.minLength(5), Validators.required])
  });

  get zipcode() {
    return this.form.get('zipcode');
  }

  constructor() {
    this.zipsubmit = new EventEmitter();
  }

  ngOnInit() {
  }

  public OnFormSubmit() {
    if (this.form.valid) {
      this.zipsubmit.emit('test, thisis working');
      console.log('Should have emitted event by now');
    }

  }
}
