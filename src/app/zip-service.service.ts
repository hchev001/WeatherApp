import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ZipServiceService {

  // Observable string sources
  private userZipcode = new Subject<string>();

  // Observable string streams
  userZipcode$ = this.userZipcode.asObservable();

  // Service message commands
  submitZipcode(zip: string) {
    this.userZipcode.next(zip);
  }
  constructor() { }

}
