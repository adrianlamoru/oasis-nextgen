import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReportsPtoAbsenceSummary } from '../models';

@Injectable()
export class ReportsPtoAbsenceSummaryService {

  private ReportsPtoAbsenceSummaryUrl = 'api/ReportsPtoAbsenceSummaryReport';
  reportsPtoAbsenceSummaryReport: ReportsPtoAbsenceSummary[] = [
    {
      iD: 'A04754',
      name: 'APSEY LOREN',
      accruedThru: new Date(),
      yearEnd: new Date(),
      planDescription: 'SICK',
      carryOver: 0.00,
      ytdAccrued: 7.44,
      ytdUsed: 0.00,
      ytdAvailable: 7.44,
      status: '2'
    }, {
      iD: 'R98845',
      name: 'ABRAMO KEELEY L',
      accruedThru: new Date(),
      yearEnd: new Date(),
      planDescription: 'PERSONAL F/T',
      carryOver: 0.00,
      ytdAccrued: 48.00	,
      ytdUsed: 8.00	,
      ytdAvailable: 40.00,
      status: '0'
    }, {
      iD: 'G85782',
      name: '	ACOSTA ANTON V',
      accruedThru: new Date(),
      yearEnd: new Date(),
      planDescription: 'VACATION',
      carryOver: 0.00,
      ytdAccrued: 80.00,
      ytdUsed: 0.00,
      ytdAvailable: 80.00,
      status: '0'
    }, {
      iD: 'A04754',
      name: 'ASLEY CINDY',
      accruedThru: new Date(),
      yearEnd: new Date(),
      planDescription: 'VACATION',
      carryOver: 0.00,
      ytdAccrued: 12.00,
      ytdUsed: 0.00,
      ytdAvailable: 12.00,
      status: '2'
    }, {
      iD: 'D17106',
      name: 'ALONSO CESAR',
      accruedThru: new Date(),
      yearEnd: new Date(),
      planDescription: 'PERSONAL F/T',
      carryOver: 0.00,
      ytdAccrued: 0.00,
      ytdUsed: 0.00,
      ytdAvailable: 0.00,
      status: '1'
    }, {
      iD: 'X30754',
      name: 'BERDUO ALBERTO C',
      accruedThru: new Date(),
      yearEnd: new Date(),
      planDescription: 'VACATION',
      carryOver: 0.00,
      ytdAccrued: 120.00,
      ytdUsed: 120.00,
      ytdAvailable: 0.00,
      status: '1'
    }, {
      iD: 'J01811',
      name: 'MONTEJO DOMINGO',
      accruedThru: new Date(),
      yearEnd: new Date(),
      planDescription: 'PERSONAL F/T',
      carryOver: 0.00,
      ytdAccrued: 0.00,
      ytdUsed: 0.00,
      ytdAvailable: 0.00,
      status: '4'
    }];
  constructor(
    private http: HttpClient) { }

    getPtoAbsenceSummary() {
    return this.reportsPtoAbsenceSummaryReport;
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
