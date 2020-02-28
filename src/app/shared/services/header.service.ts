import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Header, portalType, Company, SearchResult, UserType } from '../models';
import { AuthService } from './auth.service';

@Injectable()
export class HeaderService {
  private headerEmployeeDataUrl = 'api/header';
  private headerClientDataUrl = 'api/header_client';

  private searchClientDataUrl = 'api/search_client';
  private searchEmployeeDataUrl = 'api/search_employee';

  public selectedCompany = new BehaviorSubject<Company>(null);
  selectedCompany$ = this.selectedCompany.asObservable();

  private searchData: SearchResult[] = null;
  private userType: UserType;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.userType = UserType[this.authService.getUserType()];
  }

  getHeaderData(type?: number): Observable<Header> {
    const url =
      type === portalType.client
        ? this.headerClientDataUrl
        : this.headerEmployeeDataUrl;
    return this.http.get<Header>(url).pipe(
      tap(header => this.log(`fetched header`)),
      catchError(this.handleError('getHeader', null))
    );
  }

  isSelectedComany(company: Company) {
    this.selectedCompany.next(company);
  }

  search(searchText: string, groupByMaxNumber: number = 0): Observable<Array<any>> {
    let search: Observable<SearchResult[]> = this.loadSearch();

    if (searchText.length > 0) {
      search = search.map((searchResult: SearchResult[]) => {
        return searchResult
          .filter((searchModel: SearchResult) => searchModel.description.toLowerCase().includes(searchText.toLowerCase()));
      });
    }

    return search.map((searchResult: SearchResult[]) => this.groupBy(searchResult, 'type', groupByMaxNumber));
  }

  groupBy(collection: Array<any>, groupBy: string, groupByMaxNumber: number = 0): Array<any> {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }

    if (groupByMaxNumber <= 0) {
      groupByMaxNumber = Number.MAX_SAFE_INTEGER;
    }

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[groupBy]]) {
        previous[current[groupBy]] = [current];
      } else {
        previous[current[groupBy]].push(current);
      }

      return previous;
    }, {});

    // this will return an array of objects, each object containing a group of objects
    return Object.keys(groupedCollection)
      .map(key => ({ key, value: groupedCollection[key].slice(0, groupByMaxNumber) }));
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
  private log(message: string) { }

  private loadSearch(): Observable<SearchResult[]> {
    if (this.userType === UserType.client) {
      return this.http.get<SearchResult[]>(this.searchClientDataUrl)
      .pipe(
        tap(dashboard => this.log(`fetched search client data`)),
        catchError(this.handleError('getSearchData', []))
      );
    }

    if (this.userType === UserType.employee) {
      return this.http.get<SearchResult[]>(this.searchEmployeeDataUrl)
      .pipe(
        tap(dashboard => this.log(`fetched search employee data`)),
        catchError(this.handleError('getSearchData', []))
      );
    }

    return Observable.of([]);
  }
}
