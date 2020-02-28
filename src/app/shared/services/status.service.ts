import { Injectable } from '@angular/core';
import { Status } from '../models';

@Injectable()
export class StatusService {

  constructor() { }

  getStatusData(): Status[] {
    return [{
      ID: 1,
      Text: 'Active'
    }, {
      ID: 2,
      Text: 'Inactive'
    }];
  }

}

