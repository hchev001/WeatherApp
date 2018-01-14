import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GeoEncoding } from './GeoEncoding';

@Injectable()
export class ZipServiceService {

  // Observable string sources
  private userGeoEncoding = new Subject<GeoEncoding>();

  // Observable string streams
  userZipcode$ = this.userGeoEncoding.asObservable();

  // Service message commands
  submitEncoding( encoding: GeoEncoding) {
    this.userGeoEncoding.next(encoding);
  }
  constructor() { }

}
