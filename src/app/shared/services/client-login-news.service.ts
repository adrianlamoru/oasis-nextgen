
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NewsModal } from '../models/news-modal.interface';
import {ReportErrorService} from './report-error.service';

@Injectable()
export class ClientLoginNewsService extends ReportErrorService {

    private newsContentUrl = 'api/loginNews';

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    getNewsContent(isLogin = false): Observable<NewsModal[]> {
        let random = 0;

        const content: NewsModal[] = [
            {
                title: `Payroll Delivery Alert`,
                body: `Please note, due to the winter storm impacting multiple states,
                    FedEx deliveries may be delayed. We encourage you to submit payroll early,
                    if at all possible, this week and we will process upon receipt. All payrolls
                    were/will be released on time, but may be delayed in the delivery process
                    (and FedEx may also be delayed in updating its tracking software). Please contact us if you have any questions.`
            },
            {
                title: `E-Verify Unavailable`,
                body: `E-Verify will be unavailable due to system enhancements from March 23, 2018,
                    at 12:00 a.m. through March 26, 2018, at 8:00 a.m. Please note, while
                    E-Verify is unavailable, employers will not be able to access their E-Verify
                    accounts. For more information, please click here.`
            },
            {
                title: `IRS Form 226-J Penalty Communications`,
                body: `If you receive an IRS Form 226-J Penalty letter, please forward to your
                    Relationship Manager as soon as possible as the response requested is time
                    sensitive. The Oasis ACA team will review and provide guidance based on your
                    particular experience for the tax year in question. If you have any questions, please contact your Relationship Manager.`
            },
            {
                title: `Payroll Delivery Alert`,
                body: `Please note, due to the winter storm impacting multiple states,
                    FedEx deliveries may be delayed. We encourage you to submit payroll early,
                    if at all possible, this week and we will process upon receipt. All payrolls
                    were/will be released on time, but may be delayed in the delivery process
                    (and FedEx may also be delayed in updating its tracking software). Please contact us if you have any questions.`
            }
        ];

        if (!isLogin) {
          random = Math.random();
        }

        if (random <= 0.2) {
            return Observable.of(
                content
            );
        }

        return Observable.of(
            []
        );
    }
}
