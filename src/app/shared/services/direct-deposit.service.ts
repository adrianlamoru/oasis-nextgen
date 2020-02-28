import { Observable } from 'rxjs/Observable';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReportErrorService } from './report-error.service';
import { EmployeeDirectDeposit, IDataDriven } from '../models';
import { tap, catchError } from 'rxjs/operators';

const EMPLOYEE_DIRECT_DEPOSIT_URL = 'api/employeeDirectDeposit';
const TYPE_DIRECT_DEPOSIT_URL = 'api/typeDirectDeposit';
const BANK_NAME_DIRECT_DEPOSIT_URL = 'api/bankName';
const ACCOUNT_DIRECT_DEPOSIT_URL = 'api/accountDirectDeposit';
const METHOD_DIRECT_DEPOSIT_URL = 'api/methodDirectDeposit';
const AMOUNT_DIRECT_DEPOSIT_URL = 'api/amountDirectDeposit';
const STATUS_DIRECT_DEPOSIT_URL = 'api/statusDirectDeposit';

export class DirectDepositService extends ReportErrorService {
    id: number;

    constructor (@Inject(HttpClient) private httpService: HttpClient) {
        super();

        this.id = 0;
    }

    public addDirectDeposit(data: EmployeeDirectDeposit): Observable<EmployeeDirectDeposit> {
        const account: string = data.account;

        data.id = this.id.toString();
        data.bankName = 'BN-001';
        data.status = 'ST-001';
        data.account = 'xxxx' + account.substr(account.length - 5, 5);

        return Observable.of(data);
    }

    public getTypes(): Observable<IDataDriven[]> {
        return this.httpService.get<IDataDriven[]>(TYPE_DIRECT_DEPOSIT_URL)
            .pipe(
                tap(client => this.log(`fetched type direct deposit list`)),
                catchError(this.handleError('getTypes', []))
            );
    }

    public getBankNames(): Observable<IDataDriven[]> {
        return this.httpService.get<IDataDriven[]>(BANK_NAME_DIRECT_DEPOSIT_URL)
            .pipe(
                tap(client => this.log(`fetched bank name direct deposit list`)),
                catchError(this.handleError('getBankNames', []))
            );
    }

    public getAccounts(): Observable<IDataDriven[]> {
        return this.httpService.get<IDataDriven[]>(ACCOUNT_DIRECT_DEPOSIT_URL)
            .pipe(
                tap(client => this.log(`fetched amoutn direct deposit list`)),
                catchError(this.handleError('getAccounts', []))
            );
    }

    public getAmounts(): Observable<IDataDriven[]> {
        return this.httpService.get<IDataDriven[]>(AMOUNT_DIRECT_DEPOSIT_URL)
            .pipe(
                tap(client => this.log(`fetched amount direct deposit list`)),
                catchError(this.handleError('getAmounts', []))
            );
    }

    public getMethods(): Observable<IDataDriven[]> {
        return this.httpService.get<IDataDriven[]>(METHOD_DIRECT_DEPOSIT_URL)
            .pipe(
                tap(client => this.log(`fetched method direct deposit list`)),
                catchError(this.handleError('getMethods', []))
            );
    }

    public getStatus(): Observable<IDataDriven[]> {
        return this.httpService.get<IDataDriven[]>(STATUS_DIRECT_DEPOSIT_URL)
            .pipe(
                tap(client => this.log(`fetched status direct deposit list`)),
                catchError(this.handleError('getStatus', []))
            );
    }

    public getEmployeeDirectDeposits(): Observable<EmployeeDirectDeposit[]> {
        return this.httpService.get<EmployeeDirectDeposit[]>(EMPLOYEE_DIRECT_DEPOSIT_URL)
            .pipe(
                tap(client => this.log(`fetched employee direct deposit list`)),
                catchError(this.handleError('getEmployeeDirectDeposit', []))
            );
    }

    public updateDirectDeposit(key: string, employeeDirectDeposit: EmployeeDirectDeposit): Observable<EmployeeDirectDeposit> {
        const account: string = employeeDirectDeposit.account;

        employeeDirectDeposit.account = 'xxxx' + account.substr(account.length - 5, 5);

        return Observable.of(employeeDirectDeposit);
    }
}
