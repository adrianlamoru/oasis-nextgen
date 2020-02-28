import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';


import { GarnishmentsReport } from '../models';

@Injectable()
export class GarnishmentsDocketReportService {

  private garnishmentsDataURL = 'api/garnishmentsDocketReportData';
  private garnishmentsIDXURL = 'api/garnishmentsDocketReportsIDX';
  private selectedGarnishmentIdxURL = 'api/selectedGarnishmentReportIdx';
  private garnishmentsFinalDataURL = 'api/garnishmentsDocketReportData';

  constructor(private http: HttpClient) {

  }

  changeSelectedGarnishmentIdx(idx: string){
    return this.http.post(this.selectedGarnishmentIdxURL, {selectedGarnishmentIdxURL: idx})
    .pipe(
      tap(benefits => this.log('fetched garnishments reports'),
      catchError(this.handleError('getReports', null)))
  );
  }

  getSelectedGarnishmentReportIdx(){
    return this.http.get(this.selectedGarnishmentIdxURL)
    .pipe(
      tap(benefits => this.log('fetched garnishments reports'),
      catchError(this.handleError('getReports', null)))
  );
  }
  finalReportData: GarnishmentsReport[]=[
    {
      docketNumber: '81212003',
      receipetDate: '01/31/2014',
      issuingAuthoriry: 'State of FI',
      category: 'Child Support',
      garnishmentLimit: '',
      flatAmount: '100.00',
      startDate: '02/01/2014',
      stopDate: '',
      payPeriodLimit: '',
      payeeID: '',
      deductionCode: 'CHDSUPP - Child Support',
      garnishmentsFee: '2.00',
      maximumGarnishmentPer: '',
      maximumBasis: '',
      supressPayTypes: '',
      annotation: '',
      overrideAmount: '',
      overrideStartDate: '',
      overrideStopDate: ''
    },
    {
      docketNumber: '81212004',
      receipetDate: '01/31/2014',
      issuingAuthoriry: 'State of FI',
      category: 'Child Support',
      garnishmentLimit: '',
      flatAmount: '100.00',
      startDate: '02/01/2014',
      stopDate: '',
      payPeriodLimit: '',
      payeeID: '',
      deductionCode: 'CHDSUPP - Child Support',
      garnishmentsFee: '2.00',
      maximumGarnishmentPer: '',
      maximumBasis: '',
      supressPayTypes: '',
      annotation: '',
      overrideAmount: '',
      overrideStartDate: '',
      overrideStopDate: ''
    },
    {
      docketNumber: '81212005',
      receipetDate: '01/31/2014',
      issuingAuthoriry: 'State of FI',
      category: 'Child Support',
      garnishmentLimit: '',
      flatAmount: '100.00',
      startDate: '02/01/2014',
      stopDate: '',
      payPeriodLimit: '',
      payeeID: '',
      deductionCode: 'CHDSUPP - Child Support',
      garnishmentsFee: '2.00',
      maximumGarnishmentPer: '',
      maximumBasis: '',
      supressPayTypes: '',
      annotation: '',
      overrideAmount: '',
      overrideStartDate: '',
      overrideStopDate: ''
    }
  ]
  reportData: any[] = [{
    'Docket Number': '81212003',
    'Receipt Date': '01/31/2014',
    'Issuing Authority': 'State of FI',
    'Category': 'Child Support',
    'Garnishment Limit': '',
    'Flat Amount': '100.00',
    'Start Date': '02/01/2014',
    'Stop Date': '',
    'Pay Period Limit': '',
    'Payee ID': '',
    'Deduction Code': 'CHDSUPP - Child Support',
    'Garnishment Fee': '2.00',
    'Maximum Garnishment %': '',
    'Maximum Basis': '',
    'Supress Pay Types': '',
    'Annotation': '',
    'Override Amount': '',
    'Override Start Date': '',
    'Override Stop Date': ''
  },
  {
    'Docket Number': '81212004',
    'Receipt Date': '01/31/2014',
    'Issuing Authority': 'State of FI',
    'Category': 'Child Support',
    'Garnishment Limit': '',
    'Flat Amount': '100.00',
    'Start Date': '02/01/2014',
    'Stop Date': '',
    'Pay Period Limit': '',
    'Payee ID': '',
    'Deduction Code': 'CHDSUPP - Child Support',
    'Garnishment Fee': '2.00',
    'Maximum Garnishment %': '',
    'Maximum Basis': '',
    'Supress Pay Typ': '',
    'Annotation': '',
    'Override Amount': '',
    'Override Start Date': '',
    'Override Stop Date': ''
  },
  {
    'Docket Number': '81212005',
    'Receipt Date': '01/31/2014',
    'Issuing Authority': 'State of FI',
    'Category': 'Child Support',
    'Garnishment Limit': '',
    'Flat Amount': '100.00',
    'Start Date': '02/01/2014',
    'Stop Date': '',
    'Pay Period Limit': '',
    'Payee ID': '',
    'Deduction Code': 'CHDSUPP - Child Support',
    'Garnishment Fee': '2.00',
    'Maximum Garnishment %': '',
    'Maximum Basis': '',
    'Supress Pay Types': '',
    'Annotation': '',
    'Override Amount': '',
    'Override Start Date': '',
    'Override Stop Date': ''
  }];

  reportsIDX: string[] = ['81212003', '81212004', '81212005'];
  getReports(): Observable<any[]>{
    return this.http.get<any[]>(this.garnishmentsDataURL)
            .pipe(
                tap(benefits => this.log('fetched garnishments reports'),
                catchError(this.handleError('getReports', null)))
            );
  }

  getFinalReports(): Observable<any[]>{
    return this.http.get<any[]>(this.garnishmentsFinalDataURL)
            .pipe(
                tap(benefits => this.log('fetched garnishments reports'),
                catchError(this.handleError('getReports', null)))
            );
  }

  getReportsIds():Observable<string[]>{
    return this.http.get<string[]>(this.garnishmentsIDXURL)
            .pipe(
                tap(benefits => this.log('fetched garnishments reports IDs'),
                catchError(this.handleError('getReports', null)))
            );
  }

  getReportsIdsNO(){
    return this.reportsIDX;
  }

  getReportsNO(){
    return this.reportData;
  }

  getFinalReportsNO(){
    return this.finalReportData;
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

  /**
   * Log a HeroService message with the MessageService
   * @param message
   */
  private log(message: string) {

  }

}
