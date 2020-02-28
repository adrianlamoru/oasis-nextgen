import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ClientEmployees } from '../../client/models';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientEmployeesService {

  private clientEmployeesListUrl = 'api/clientEmployeesList';
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient) { }

    // Services for Employee Section

    getEmployeeSearchData(sessionData) {
      const body = {JSONIN: {sessionToken: sessionData}};
      const options = {headers: this.header};

      return this.http.post(environment.clientEmployeeLstSearch,
        body,
        options
      );
    }

    getEmployeeDetailData(sessionData, empId) {
      const body = {JSONIN: {sessionToken: sessionData, employeeId: empId}};
      const options = {headers: this.header};

      return this.http.post(environment.clientEmployeeDetail,
        body,
        options
      );
    }

    getEmployeeTaxWithHoldingData(sessionData, empId) {
      const body = {JSONIN: {sessionToken: sessionData, employeeId: empId}};
      const options = {headers: this.header};

      return this.http.post(environment.clientEmployeeTaxWithHolding,
        body,
        options
      );
    }

    getEmployeeEmploymentData(sessionData, empId) {
      const body = {JSONIN: {sessionToken: sessionData, employeeId: empId}};
      const options = {headers: this.header};

      return this.http.post(environment.clientEmployeeEmployment,
        body,
        options
      );
    }
    // End Services for Employee
    getEmployeesList(): Observable<ClientEmployees[]> {
      return this.http.get<ClientEmployees[]>(this.clientEmployeesListUrl)
        .map((res: ClientEmployees[]) => {

          res.forEach((employee) => {
            this.convertModelToViewModel(employee);

          });
          return res;
        })
        .pipe(
          tap(client => this.log(`fetched employees list`)),
          catchError(this.handleError('getEmployeesList', []))
        );
    }

    getEmployee(id: string): Observable<ClientEmployees>  {
      return this.http.get<ClientEmployees>(this.clientEmployeesListUrl + '/' + id)
        .map((res: ClientEmployees) => {

          this.convertModelToViewModel(res);

          return res;
        });
    }

    convertModelToViewModel(employee: ClientEmployees): void {
      const today = new Date();

      if (employee.dob) {
        const dateValue = new Date(employee.dob);
        employee.dobPicker = { day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear() };

        employee.age = today.getFullYear() - new Date(employee.dob).getFullYear();
      }
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
