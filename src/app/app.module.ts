import { GeoEncodingService } from './shared/geo-encoding.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherGlyphComponent } from './weather-glyph/weather-glyph.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WeatherDashboardComponent,
    CurrentWeatherComponent,
    WeatherFormComponent,
    WeatherGlyphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    WeatherService,
    GeoEncodingService,
    GeoEncodingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
