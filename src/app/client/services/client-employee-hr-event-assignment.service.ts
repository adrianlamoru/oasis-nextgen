import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { IClientEmployeeHrEventAssignment, IClientEmployeeHrEventAssignmentType } from '../models';

@Injectable()
export class ClientEmployeeHrEventAssignmentService {

  private ClientEmployeeHrEventAssignmentUrl = 'api/ClientEmployeeHrEventAssignmentList';
  private ClientEmployeeHrEventAssignmentEventCodesListUrl = 'api/ClientEmployeeHrEventAssignmentEventCodesList';

  constructor(
    private http: HttpClient) { }

  // GET
  getEmployeeHrEventAssignmentList(): Observable<IClientEmployeeHrEventAssignment[]> {

    return this.http.get<IClientEmployeeHrEventAssignment[]>(this.ClientEmployeeHrEventAssignmentUrl)
      .pipe(
        tap(client => this.log(`fetched employee IClientEmployeeHrEventAssignment list`)),
        catchError(this.handleError('getEmployeeHrEventAssignmentList', []))
      );
  }

  getEmployeeHrEventAssignmentEventCodesList(): Observable<IClientEmployeeHrEventAssignmentType[]> {

    return this.http.get<IClientEmployeeHrEventAssignmentType[]>(this.ClientEmployeeHrEventAssignmentEventCodesListUrl)
      .pipe(
        tap(client => this.log(`fetched employee event assignment event codes list`)),
        catchError(this.handleError('getEmployeeHrEventAssignmentEventCodesList', []))
      );
  }

  // PUT
  putEmployeeHrEventAssignmentList(ClientEmployeeHrEventAssignment: IClientEmployeeHrEventAssignment) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http
      .put<IClientEmployeeHrEventAssignment[]>(this.ClientEmployeeHrEventAssignmentUrl,
        ClientEmployeeHrEventAssignment, { headers: headers })
      .pipe(
        tap(client => this.log(`put employee event assignment list`)),
        catchError(this.handleError('putEmployeeHrEventAssignmentList', []))
      );
  }

  // POST
  postEmployeeHrEventAssignmentList(ClientEmployeeHrEventAssignment: IClientEmployeeHrEventAssignment) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<IClientEmployeeHrEventAssignment[]>(
      this.ClientEmployeeHrEventAssignmentUrl, ClientEmployeeHrEventAssignment, { headers: headers })
      .pipe(
        tap(client => this.log(`post employee event assignment list`)),
        catchError(this.handleError('postEmployeeHrEventAssignmentList', []))
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
