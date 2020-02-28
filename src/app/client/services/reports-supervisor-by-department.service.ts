import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReportsList, SupervisorByDepartment } from '../models';

@Injectable()
export class SupervisorByDepartmentService {

    supervisorByDepartmentData = [
    {
        deptId: '100',
        deptName: 'HAPPY',
        status: 'ACTIVE',
        empId: 'A17447',
        empName: 'DYLAN ABRAHAMS',
        supervisorId: 'C04732',
        supervisorName: 'WEISE ALLEN'

    }, {
        deptId: '200',
        deptName: 'ACCT',
        status: 'ACTIVE',
        empId: 'V04581',
        empName: 'CROSS KYM U',
        supervisorId: 'Y04608',
        supervisorName: 'ZEBRA BRAD'

    }, {
        deptId: '300',
        deptName: 'R & D',
        status: 'ACTIVE',
        empId: 'B04587',
        empName: 'BROWN JOE N',
        supervisorId: 'D04589',
        supervisorName: 'DEBB STEPH D'

    }
    ];

    private SupervisorByDepartmentUrl = 'api/SupervisorByDepartment';

  constructor(
    private http: HttpClient) { }

    getSupervisorByDepartment() {
        return this.supervisorByDepartmentData;
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
