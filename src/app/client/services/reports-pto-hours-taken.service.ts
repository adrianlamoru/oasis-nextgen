import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { PayrollPtoHoursTaken } from '../models/payroll-pto-hours-taken.interface';

@Injectable()
export class ReportsPtoHoursTakenService {

  private ReportsPtoAbsenceSummaryUrl = 'api/PtoHoursTakenDataRows';
  ptoHoursTakenDataRows: PayrollPtoHoursTaken[] = [
    {
        absenceCode: 'PERSONAL',
        employeeID: 'A17447',
        employeeName: 'DYLAN ABRAHAMS',
        absenceDate: new Date ( '09/03/2018' ),
        reason: 'VOUCHER# 004707',
        hours: '8.00',
      }, {
        absenceCode: 'PERSONAL',
        employeeID: 'A17447',
        employeeName: 'DYLAN ABRAHAMS',
        absenceDate:  new Date ( '10/03/2017' ),
        reason: 'VOUCHER# 443908',
        hours: '16.00',
      }, {
        absenceCode: 'PERSONAL',
        employeeID: 'R98845',
        employeeName: 'KEELEY ABRAMO',
        absenceDate:  new Date ( '12/28/2017' ),
        reason: 'VOUCHER# 467244	',
        hours: '8.00',
      }, {
        absenceCode: 'VACATION',
        employeeID: 'A17447',
        employeeName: 'DYLAN ABRAHAMS',
        absenceDate: new Date ( '11/24/2017' ),
        reason: '	VOUCHER# 450712',
        hours: '2.40',
      }, {
        absenceCode: 'PERSONAL',
        employeeID: '	R98845',
        employeeName: 'KEELEY ABRAMO',
        absenceDate:  new Date ( '02/14/2018' ),
        reason: '	VOUCHER# 446116',
        hours: '4.00',
      }];

  constructor(
    private http: HttpClient) { }

    getEmployeePtoHoursTaken(employeeId) {
      let empPtoHoursTakenData: any[] = [];
      empPtoHoursTakenData = this.ptoHoursTakenDataRows.filter(item => {
            return (item.employeeID === employeeId);
          });
      return empPtoHoursTakenData;

    }

    getPtoHoursTaken() {
    return this.ptoHoursTakenDataRows;
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
