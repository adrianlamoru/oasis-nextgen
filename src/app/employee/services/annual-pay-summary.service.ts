import { CompensationTax } from './../models/compensation-tax.model';
import { CompensationEarningDetails } from '../models/compensation-earning-details.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ICompensationEarningsSummary } from '../models/compensation-earnings-summary.interface';
import { tap, catchError } from 'rxjs/operators';
import { ICompensationDeductionDetail } from '../models/compensation-deduction-detail.interface';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnnualPaySummaryService {
    private selectedYear = 0;
    private selectedYearForFilter = new Subject();
    selectedYearForFilter$ = this.selectedYearForFilter.asObservable();
    private compensationEarningsSumamry = 'api/CompensationEarningsSumamry';
    private compensationDeductionDetail = 'api/CompensationDeductionDetailData';
    private compensationEarnignDetails = 'api/CompensationEarningDetailsData';
    private compensationTax = 'api/CompensationTaxData';

    constructor(
        private http: HttpClient) { }

    changeSelectedYear(year: number) {
        this.selectedYear = year;
        this.selectedYearForFilter.next();
    }

    getSelectedYear() {
        return this.selectedYear;
    }

    getCompensationEarningsSumamry(): Observable<ICompensationEarningsSummary[]> {
        return this.http.get<ICompensationEarningsSummary[]>(this.compensationEarningsSumamry)
            .pipe(
                tap(benefits => this.log('fetched compensations'),
                catchError(this.handleError('getCompensationEarningsSumamry', null)))
            );
    }

    getCompensationDeductionDetail(): Observable<ICompensationDeductionDetail[]> {
        return this.http.get<ICompensationDeductionDetail[]>(this.compensationDeductionDetail)
            .pipe(
                tap(benefits => this.log('fetched compensations'),
                catchError(this.handleError('getCompensationDeductionDetail', null)))
            );
    }

    getCompensationEarningDetail(): Observable<CompensationEarningDetails[]> {
        return this.http.get<CompensationEarningDetails[]>(this.compensationEarnignDetails)
            .pipe(
                tap(benefits => this.log('fetched compensations'),
                catchError(this.handleError('getCompensationEarningDetail', null)))
            );
    }

    getCompensationTax(): Observable<CompensationTax[]> {
        return this.http.get<CompensationTax[]>(this.compensationTax)
            .pipe(
                tap(benefits => this.log('fetched compensations'),
                    catchError(this.handleError('getCompensationEarningDetail', null)))
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

    /**
     * Log a HeroService message with the MessageService
     * @param message
     */
    private log(message: string) {

    }
}
