import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UnpaidEmployees } from '../models';

@Injectable()
export class ReportsPayrollBenefitsBillingService {

  benefitsBillingReportData = [
    {
        benefitPlan: 'Aetna Dental',
        employeeName: 'Abramo Keeley',
        ssn: '###-##-1234',
        premiumAmount: '455.12',
        employeeContribution: '455.12',
        netAmountBilled: '0.00'
    },
    {
        benefitPlan: 'Aetna Dental',
        employeeName: 'John Doe',
        ssn: '###-##-5545',
        premiumAmount: '159.50',
        employeeContribution: '159.50',
        netAmountBilled: '0.00'
    },
    {
        benefitPlan: 'Aetna Dental',
        employeeName: 'Acosta Anton',
        ssn: '###-##-5411',
        premiumAmount: '123.12',
        employeeContribution: '123.12',
        netAmountBilled: '0.00'
    },
    {
        benefitPlan: 'Aetna Dental',
        employeeName: 'Burke Dianne',
        ssn: '###-##-8452',
        premiumAmount: '14.50',
        employeeContribution: '0.00',
        netAmountBilled: '14.50'
    },
    {
        benefitPlan: 'Aetna Hno 0/100 FL',
        employeeName: 'Phillip R',
        ssn: '###-##-5457',
        premiumAmount: '2224.12',
        employeeContribution: '2224.12',
        netAmountBilled: '0.00'
    },
    {
        benefitPlan: 'Aetna Hno 0/100 FL',
        employeeName: 'Thomas Barbara',
        ssn: '###-##-6754',
        premiumAmount: '2925.00',
        employeeContribution: '1417.50',
        netAmountBilled: '1507.50'
    }
  ];

  constructor(
    private http: HttpClient) { }

    getBenefitsBillingData() {
        return this.benefitsBillingReportData;
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
