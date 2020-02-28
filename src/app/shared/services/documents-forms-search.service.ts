import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileLink, IBasePage } from '../models';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DocumentsFormsSearchService {
  private DocumentsAndFormsUrl = 'api/documentsAndForms';
  private GettingStartedDocumentsAndFormsUrl = 'api/gettingStartedDocumentsAndForms';

  private fileList: FileLink[];

  constructor(private http: HttpClient) {
  }

  /**
   * Returns the list of all files
   * @param { page } - Current page
   * @returns { Observable<FileLink[]> } Observable that returns a list of files
   */
  public getFileList(page: IBasePage): Observable<FileLink[]> {
    if (page.url.startsWith('/client')) {
      return this.getClientFileList(page);
    } else if (page.url.startsWith('/employee')) {
      return this.getEmployeeFileList(page);
    }

    return Observable.of([]);
  }

  /**
   * Returns the list of all files on client section
   * @param { page } - Current page
   * @returns { Observable<FileLink[]> } Observable that returns a list of files
   */
  public getClientFileList(page: IBasePage): Observable<FileLink[]> {
    return this.http.get<FileLink[]>(this.DocumentsAndFormsUrl).pipe(
      tap(client =>
        this.log(`fetched employee payroll loan payment frequency list`)
      ),
      catchError(
        this.handleError('getEmployeePayrollLoanPaymentFrequencyList', [])
      )
    );
  }

  /**
   * Returns the list of all files on employee section
   * @param { page } - Current page
   * @returns { Observable<FileLink[]> } Observable that returns a list of files
   */
  public getEmployeeFileList(page: IBasePage): Observable<FileLink[]> {
    return this.http.get<FileLink[]>(this.DocumentsAndFormsUrl)
    .map((files: FileLink[]) => {
      const result: FileLink[] = [];
      while (files.length > 0) {
        const i = Math.floor(Math.random() * files.length);
        result.push(files[i]);
        files.splice(i, 1);
      }

      return result;
    });
  }

  /**
   * Returns the list of all files
   * @returns { Observable<FileLink[]> } Observable that returns a list of files
   */
  public getGettingStartedFileList(): Observable<FileLink[]> {
    return this.http.get<FileLink[]>(this.GettingStartedDocumentsAndFormsUrl).pipe(
      tap(client =>
        this.log(`fetched getGettingStartedFileList list`)
      ),
      catchError(
        this.handleError('getGettingStartedFileList', [])
      )
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
  private log(message: string) {}
}
