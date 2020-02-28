import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ReportsWcBillingHistoryService {

    wcBillingHistoryData = [{
        empName: 'APSEY LOREN',
        grossWages: 17307.72,
        billableWages: 17307.72,
        effecRate: 10.09,
        amountBilled: 1746.00
    }, {
        empName: 'BAARNES ELSA',
        grossWages: 1020.00,
        billableWages: 1020.00,
        effecRate: 10.09,
        amountBilled: 102.90
    }, {
        empName: 'FL-5507 * STREET/ROAD CONSTRUC-SURFACE WRK Total',
        grossWages: 18327.72,
        billableWages: 18327.72,
        effecRate: null,
        amountBilled: 1848.90
    }, {
        empName: 'APSEY LOREN',
        grossWages: 17307.66,
        billableWages: 17307.66,
        effecRate: 0.47,
        amountBilled: 81.72
    }, {
        empName: 'BARNES ELSA',
        grossWages: 1020.00,
        billableWages: 1020.00,
        effecRate: 0.47,
        amountBilled: 4.80
    }, {
        empName: 'THOMPSON NICOLE',
        grossWages: 11100.00,
        billableWages: 11100.00,
        effecRate: 0.47,
        amountBilled: 52.44
    }, {
        empName: 'FL-8810 * CLERICAL Total',
        grossWages: 29427.66,
        billableWages: 29427.66,
        effecRate: null,
        amountBilled: 138.96
    }, {
        empName: 'Total Billed',
        grossWages: 47755.38,
        billableWages: 47755.38,
        effecRate: null,
        amountBilled: 1987.86
    }
  ];

  private ReportsWcBillingHistoryUrl = 'api/ReportsWcBillingHistory';

  constructor(
    private http: HttpClient) { }

    getWcBillingHistory() {
    return this.wcBillingHistoryData;
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
