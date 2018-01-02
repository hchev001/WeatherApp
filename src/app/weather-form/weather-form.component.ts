import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  private zip;

  // our form
  private form = new FormGroup({
    zipcode: new FormControl('', [Validators.minLength(5), Validators.required])
  });

  get zipcode() {
    return this.form.get('zipcode');
  }

  constructor() { }

  ngOnInit() {
  }

  public OnFormSubmit() {
    if (this.form.valid) {
      console.log(this.zipcode.value);
    }
  }
}
