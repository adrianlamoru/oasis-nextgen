import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NewsModal } from '../models/news-modal.interface';

@Injectable()
export class NewsService {

  private newsModalUrl = 'api/newsModal';
  private newsEmployeeModalUrl = 'api/newsEmployeeModal';

  constructor(
    private http: HttpClient
  ) { }

  getNewsModalData(): Observable<NewsModal[]> {
    return this.http.get<NewsModal[]>(this.newsModalUrl)
      .pipe(
        tap(dashboard => this.log(`fetched news modal`)),
        catchError(this.handleError('getNewsModalData', []))
      );
  }

  getEmployeeNewsModalData(): Observable<NewsModal[]> {
    return this.http.get<NewsModal[]>(this.newsEmployeeModalUrl)
      .pipe(
        tap(dashboard => this.log(`fetched news modal`)),
        catchError(this.handleError('getNewsModalData', []))
      );
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

