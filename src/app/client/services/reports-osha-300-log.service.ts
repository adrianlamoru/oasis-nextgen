import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ReportsOsha300LogService {

  osha300LogReportData = [{
      caseNo: '8A71877402ABCR',
      empName: 'VAN ZUYDAM;NAYLENE',
      jobTitle: '',
      dateInjury: '01/27/2017',
      eventOccured: '',
      descLoss: 'A CHAIR FELL ON HER KNEE KNEE PAIN',
      death: '',
      daysAway: '',
      jobTrans: '',
      otherCases: '',
      onJobTrans: '',
      awayHome: '',
      injury: '',
      skinDisorder: '',
      respitory: '',
      otherIllness: '',
  }, {
    caseNo: '8A7187743941AYBC',
    empName: 'BULLOCK;BARRY A',
    jobTitle: '',
    dateInjury: '03/22/2017',
    eventOccured: '',
    descLoss: 'PUTTING DISHES IN KITCHEN DISH PIT, WINE GLASSES FELL AND LACERATION OF LEFT FOOT',
    death: '',
    daysAway: '',
    jobTrans: '',
    otherCases: '',
    onJobTrans: '',
    awayHome: '',
    injury: '',
    skinDisorder: '',
    respitory: '',
    otherIllness: '',
  }, {
    caseNo: '8A7187744736SYP',
    empName: 'DELVA;JEAN C',
    jobTitle: '',
    dateInjury: '03/27/2017',
    eventOccured: '',
    descLoss: 'DOOR STRUCK HIM IN THE BACK AS ANOTHR EE EXIT THE BAKE SHOP BACK CONTUSION',
    death: '',
    daysAway: '',
    jobTrans: '',
    otherCases: '',
    onJobTrans: '',
    awayHome: '',
    injury: '',
    skinDisorder: '',
    respitory: '',
    otherIllness: '',
   }];

  private ReportsOsha300LogUrl = 'api/ReportsOsha300Log';

  constructor(
    private http: HttpClient) { }

    getOsha300Log() {
    return this.osha300LogReportData;
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {

  }
}
