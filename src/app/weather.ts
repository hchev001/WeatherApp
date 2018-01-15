export interface Weather {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: Currently;
  minutely: Minutely;
  hourly: Hourly;
  daily: Daily;
  alerts?: (AlertsEntity)[] | null;
  flags: Flags;
  offset: number;
}
export interface Currently {
  time: number;
  summary: string;
  icon: string;
  nearestStormDistance: number;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
}
export interface Minutely {
  summary: string;
  icon: string;
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  time: number;
  precipIntensity: number;
  precipProbability: number;
}
export interface Hourly {
  summary: string;
  icon: string;
  data?: (DataEntity1)[] | null;
}
export interface DataEntity1 {
  time: number;
  summary: string;
  icon: string;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
  precipType?: string | null;
}
export interface Daily {
  summary: string;
  icon: string;
  data?: (DataEntity2)[] | null;
}
export interface DataEntity2 {
  time: number;
  summary: string;
  icon: string;
  sunriseTime: number;
  sunsetTime: number;
  moonPhase: number;
  precipIntensity: number;
  precipIntensityMax: number;
  precipIntensityMaxTime: number;
  precipProbability: number;
  precipType: string;
  temperatureHigh: number;
  temperatureHighTime: number;
  temperatureLow: number;
  temperatureLowTime: number;
  apparentTemperatureHigh: number;
  apparentTemperatureHighTime: number;
  apparentTemperatureLow: number;
  apparentTemperatureLowTime: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windGustTime: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  uvIndexTime: number;
  visibility?: number | null;
  ozone: number;
  temperatureMin: number;
  temperatureMinTime: number;
  temperatureMax: number;
  temperatureMaxTime: number;
  apparentTemperatureMin: number;
  apparentTemperatureMinTime: number;
  apparentTemperatureMax: number;
  apparentTemperatureMaxTime: number;
}
export interface AlertsEntity {
  title: string;
  regions?: (string)[] | null;
  severity: string;
  time: number;
  expires: number;
  description: string;
  uri: string;
}
export interface Flags {
  sources?: (string)[] | null;
  isd-stations?: (string)[] | null;
  units: string;
}
