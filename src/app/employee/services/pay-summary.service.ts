import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, take } from 'rxjs/operators';

import { PaySummary } from '../models';
import { ReportErrorService } from '../../shared/services';
import { MyPaySummary } from '../models';

@Injectable()
export class PaySummaryService extends ReportErrorService {

    private paySummaryUrl = 'api/paySummary';

    constructor(
         private http: HttpClient
     ) {
       super();
     }

     public getMyPaySummary(): Observable<MyPaySummary> {
       return Observable.of({
         id: 'PS001254',
         amount: 3815.24,
         deductions: 215,
         taxes: 652.35,
         date: (new Date()).toString(),
         link: 'https://www.google.com'
       });
     }

     public getRecentPaySummary(): Observable<PaySummary[]> {
       return this.getPaySummary().map((paySumaries: PaySummary[]) => {
         const result: PaySummary[] = [];
         for (let i = 0; i < 7; i++) {
           result.push(paySumaries[i]);
         }

         return result;
       });
     }

     getPaySummary(): Observable<PaySummary[]> {
        return this.http.get<PaySummary[]>(this.paySummaryUrl)
          .pipe(
            tap(paySummary => this.log(`fetched pay summary`)),
            catchError(this.handleError('getPaySummary', []))
          );
      }
}
