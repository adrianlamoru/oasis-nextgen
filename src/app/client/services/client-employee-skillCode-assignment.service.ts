import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { IClientEmployeeSkillCodeAssignment, IClientEmployeeSkillCodeType } from '../models';

@Injectable()
export class ClientEmployeeSkillCodeAssignmentService {

  // private ClientEmployeeHrEventAssignmentUrl = 'api/ClientEmployeeHrEventAssignmentList';
  // private ClientEmployeeHrEventAssignmentEventCodesListUrl = 'api/ClientEmployeeHrEventAssignmentEventCodesList';

  private ClientEmployeeSkillCodeAssignmentUrl = 'api/ClientEmployeeSkillCodeAssignmentList';
  private ClientEmployeeSkillCodeTypeListUrl = 'api/ClientEmployeeSkillCodeTypesList';

  constructor(
    private http: HttpClient) { }

  // GET
  getEmployeeSkillCodetAssignmentList(): Observable<IClientEmployeeSkillCodeAssignment[]> {

    return this.http.get<IClientEmployeeSkillCodeAssignment[]>(this.ClientEmployeeSkillCodeAssignmentUrl)
      .pipe(
        tap(client => this.log(`fetched employee IClientEmployeeSkillCodeAssignment list`)),
        catchError(this.handleError('getEmployeeSkillCodetAssignmentList', []))
      );
  }

  getEmployeeSkillCodeTypesList(): Observable<IClientEmployeeSkillCodeType[]> {

    return this.http.get<IClientEmployeeSkillCodeType[]>(this.ClientEmployeeSkillCodeTypeListUrl)
      .pipe(
        tap(client => this.log(`fetched employee IClientEmployeeSkillCodeType list`)),
        catchError(this.handleError('getEmployeeSkillCodeTypesList', []))
      );
  }

  // PUT
  putEmployeeSkillCodeAssignmentList(ClientEmployeeSkillCodeAssignment: IClientEmployeeSkillCodeAssignment) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http
      .put<IClientEmployeeSkillCodeAssignment[]>(this.ClientEmployeeSkillCodeAssignmentUrl,
        ClientEmployeeSkillCodeAssignment, { headers: headers })
      .pipe(
        tap(client => this.log(`put employee skillCode assignment list`)),
        catchError(this.handleError('putEmployeeSkillCodeAssignmentList', []))
      );
  }

  // POST
  postEmployeeSkillCodeAssignmentList(ClientEmployeeSkillCodeAssignment: IClientEmployeeSkillCodeAssignment) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<IClientEmployeeSkillCodeAssignment[]>(
      this.ClientEmployeeSkillCodeAssignmentUrl, ClientEmployeeSkillCodeAssignment, { headers: headers })
      .pipe(
        tap(client => this.log(`post employee skillCode assignment list`)),
        catchError(this.handleError('postEmployeeSkillCodeAssignmentList', []))
      );
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
