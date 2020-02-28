import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { IClientEmployeePTO } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientEmployeeDetailBeniftsService {
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

   // POST Service
  /* getEmployeePTOData(sessionData, empId): Observable<IClientEmployeePTO[]> {
    const body = {JSONIN: {sessionToken: sessionData, employeeId: empId}};
    const options = {headers: this.header};

    return this.http.post<IClientEmployeePTO[]>(environment.clientEmployeePTO,
      body,
      options
    ) .pipe(
      tap(client => this.log(`fetched employee PTO Summary list`)),
      catchError(this.handleError('getEmployeePTOSummaryList', []))
    );
  } */

  getEmployeeBenefitsData(sessionData, empId) {
    const body = {JSONIN: {sessionToken: sessionData, employeeId: empId}};
    const options = {headers: this.header};
    console.log(environment.clientEmployeeBenefitDetail);
    return this.http.post(environment.clientEmployeeBenefitDetail,
      body,
      options
    );
  }

}
