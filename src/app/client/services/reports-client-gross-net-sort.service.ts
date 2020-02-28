import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ReportsClientGrossNetSortService {

    clientGrossNetSort =  [
        { 
            'EmployeeID': 'A17447',
            'Location': 1,
            'Division': 1,
            'Department': 1,
            'ClockNo': 8,
            'ProjectNo': 10,
            'SSN': '241-72-5768',
            'EmployeeName': 'DYLAN ABRAHAMS',
            'CheckDate': '4/6/2018',
            'Voucher': 64799,
            'Description': 'HALF TIME',
            'Code': 'HALF',
            'Type': 'P-1',
            'Units': 6,
            'UnitRate': 29.58,
            'Amount': 50.59,
            'CheckType': 'B',
            'TotalGrossPay': '',
            'TotalExpenses': '',
            'GrossEarnings': '',
            'TotalDeductions': '',
            'TotalTaxes': '',
            'TotalNetPay': ''
          },
          {
            'EmployeeID': 'A17447',
            'Location': 1,
            'Division': 1,
            'Department': 1,
            'ClockNo': 8,
            'ProjectNo': 10,
            'SSN': '241-72-5768',
            'EmployeeName': 'DYLAN ABRAHAMS',
            'CheckDate': '4/16/2018',
            'Voucher': 64799,
            'Description': 'REG PAY',
            'Code': 'REG',
            'Type': 'P-2',
            'Units': 16,
            'UnitRate': 29.58,
            'Amount': 150.00,
            'CheckType': 'B',
            'TotalGrossPay': '',
            'TotalExpenses': '',
            'GrossEarnings': '',
            'TotalDeductions': '',
            'TotalTaxes': '',
            'TotalNetPay': ''
          },
          {
            'EmployeeID': 'A17447',
            'Location': 1,
            'Division': 1,
            'Department': 1,
            'ClockNo': 8,
            'ProjectNo': 15,
            'SSN': '241-72-5768',
            'EmployeeName': 'DYLAN ABRAHAMS',
            'CheckDate': '4/16/2018',
            'Voucher': 64799,
            'Description': 'FEDERAL INCOME',
            'Code': '00-10',
            'Type': 'D-1',
            'Units': 35,
            'UnitRate': 70.58,
            'Amount': 750.59,
            'CheckType': 'B',
            'TotalGrossPay': '',
            'TotalExpenses': '',
            'GrossEarnings': '',
            'TotalDeductions': '',
            'TotalTaxes': '',
            'TotalNetPay': ''
          },
          {
            'EmployeeID': 'A17447',
            'Location': 1,
            'Division': 1,
            'Department': 1,
            'ClockNo': 8,
            'ProjectNo': 15,
            'SSN': '241-72-5768',
            'EmployeeName': 'DYLAN ABRAHAMS',
            'CheckDate': '4/16/2018',
            'Voucher': 64799,
            'Description': '',
            'Code': '',
            'Type': '',
            'Units': '',
            'UnitRate': '',
            'Amount': '',
            'CheckType': '',
            'TotalGrossPay': 1017.20,
            'TotalExpenses': 0.00,
            'GrossEarnings': 1017.20,
            'TotalDeductions': 330.00,
            'TotalTaxes': 156.33,
            'TotalNetPay': 530.81
          },
          {
            'EmployeeID': 'R98845',
            'Location': 1,
            'Division': '',
            'Department': 1,
            'ClockNo': 10,
            'ProjectNo': 15,
            'SSN': '605-66-2818',
            'EmployeeName': 'KEELEY ABRAMO',
            'CheckDate': '10/28/2017',
            'Voucher': 62337,
            'Description': 'PERSONAL',
            'Code': 'PERSONAL',
            'Type': 'P-1',
            'Units': 53,
            'UnitRate': 41.75,
            'Amount': 45,
            'CheckType': 'D',
            'TotalGrossPay': '',
            'TotalExpenses': '',
            'GrossEarnings': '',
            'TotalDeductions': '',
            'TotalTaxes': '',
            'TotalNetPay': ''
          },
          {
            'EmployeeID': 'R98845',
            'Location': 1,
            'Division': '',
            'Department': 1,
            'ClockNo': 10,
            'ProjectNo': 25,
            'SSN': '605-66-2818',
            'EmployeeName': 'KEELEY ABRAMO',
            'CheckDate': '10/28/2017',
            'Voucher': 62337,
            'Description': 'REG PAY',
            'Code': 'REG',
            'Type': 'P-2',
            'Units': 13,
            'UnitRate': 41.75,
            'Amount': 255.91,
            'CheckType': 'D',
            'TotalGrossPay': '',
            'TotalExpenses': '',
            'GrossEarnings': '',
            'TotalDeductions': '',
            'TotalTaxes': '',
            'TotalNetPay': ''
          },
          {
            'EmployeeID': 'R98845',
            'Location': 1,
            'Division': '',
            'Department': 1,
            'ClockNo': 10,
            'ProjectNo': 25,
            'SSN': '605-66-2818',
            'EmployeeName': 'KEELEY ABRAMO',
            'CheckDate': '10/28/2017',
            'Voucher': 62337,
            'Description': 'REG PAY',
            'Code': 'REG',
            'Type': 'P-2',
            'Units': 13,
            'UnitRate': 41.75,
            'Amount': 255.91,
            'CheckType': 'D',
            'TotalGrossPay': '',
            'TotalExpenses': '',
            'GrossEarnings': '',
            'TotalDeductions': '',
            'TotalTaxes': '',
            'TotalNetPay': ''
          },
          {
            'EmployeeID': 'R98845',
            'Location': 1,
            'Division': '',
            'Department': 1,
            'ClockNo': 10,
            'ProjectNo': 15,
            'SSN': '605-66-2818',
            'EmployeeName': 'KEELEY ABRAMO',
            'CheckDate': '10/28/2017',
            'Voucher': 62337,
            'Description': '',
            'Code': '',
            'Type': '',
            'Units': '',
            'UnitRate': '',
            'Amount': '',
            'CheckType': '',
            'TotalGrossPay': 3923.08,
            'TotalExpenses': 0.00,
            'GrossEarnings': 3923.08,
            'TotalDeductions': 144.69,
            'TotalTaxes': 691.07,
            'TotalNetPay': 3087.32
          },
    ];

    availableLocation = ['1'];
    availableDivisions = [
        '',
        '1'
    ];
    availableDepartments = [
        '1'
    ];
    availableClockNo = [
        '8',
        '10'
    ];
    availableProjectNo = [ '10', '15', '25' ];

  constructor(
    private http: HttpClient) { }

    getEmployeeGrossNetSortData(employeeId) {
      return this.clientGrossNetSort.filter(item => {
        return (item.EmployeeID === employeeId);
      });
    }

    getClientGrossNetSortData() {
        return this.clientGrossNetSort;
    }

    getAvailableLocations() {
      return this.availableLocation;
  }

    getAvailableDivisions() {
        return this.availableDivisions;
    }

    getAvailableDepartments() {
        return this.availableDepartments;
    }

    getAvailableClockNo() {
      return this.availableClockNo;
    }

    getAvailableProjectNo() {
        return this.availableProjectNo;
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
