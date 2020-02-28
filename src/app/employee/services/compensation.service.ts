import { ICompensationDeductionDetail } from '../models/compensation-deduction-detail.interface';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ICompensationEarningsSummary } from '../models/compensation-earnings-summary.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
// Models
import { IPayStub } from '../models';

@Injectable()
export class CompensationService {

    private compensationPayStubsDataUrl: string = 'api/compensationPayStub';
    payStubs: IPayStub[];

    constructor() {
        this.initPayStubs();
    }

    /**
    * Return data source for PayStubs filtered by year
    */
    getPayStubs(year?: number): IPayStub[] {
        return this.payStubs.filter(ps => year ? ps.checkDate.getFullYear() === year : true);
    }

    initPayStubs(): void{
        this.payStubs = [{
            checkNumber: '30013426',
            checkDate: new Date(2016, 6, 20),
            netPay: 73.54
        }, {
            checkNumber: '30013427',
            checkDate: new Date(2016, 7, 25),
            netPay: 100.36
        }, {
            checkNumber: '30013428',
            checkDate: new Date(2016, 11, 5),
            netPay: 12.98
        }, {
            checkNumber: '30013429',
            checkDate: new Date(2017, 6, 20),
            netPay: 6.29
        }, {
            checkNumber: '30013430',
            checkDate: new Date(2017, 8, 14),
            netPay: 54
        }, {
            checkNumber: '30013431',
            checkDate: new Date(2016, 12, 24),
            netPay: 26.25
        }, {
            checkNumber: '30013432',
            checkDate: new Date(2018, 2, 20),
            netPay: 48.69
        }, {
            checkNumber: '30013433',
            checkDate: new Date(2018, 6, 13),
            netPay: 68.25
        }, {
            checkNumber: '30013434',
                checkDate: new Date(2018, 8, 22),
            netPay: 77.98
        }, {
            checkNumber: '30013435',
                checkDate: new Date(),
            netPay: 61.22
        }, {
            checkNumber: '30013436',
                checkDate: new Date(),
            netPay: 120.48
        }];
    }

}

