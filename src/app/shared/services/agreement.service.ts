import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { IAgreement } from '../models';
import {UserType} from '../models/user-type.enum';

@Injectable()
export class AgreementService {

    private agreementContentUrl = 'api/agreement';
    private userType: string;
    agreementClient: IAgreement = {
        content: `
        <p>
            Client agrees and accepts that it is solely responsible for the entry of payroll
            data into Oasis' system. Oasis is not responsible
            for reviewing any data entered by Client into Oasis' computer system or for any errors or omissions in the data entered
            by Client. Client hereby agrees to indemnify and hold harmless Oasis from any liability arising from or relating to
            the data entered into or omitted from Oasis' system, whether such data was entered by Client, Client's employees, Client's
            independent contractors or otherwise. The provisions of this Section are intended to supplement and not to substitute
            for the indemnification provisions of the Service Agreement.
        </p>
        <p>
            Oasis will provide Client with an initial password which will allow Client to access its accounts. Client agrees to change
            the initial password prior to its first use of the Internet Service and Client acknowledges that it is Client's responsibility
            to take reasonable precautions to safeguard the password. In the event Client has reason to believe that its password
            or accounts may have been compromised, Client agrees to change the password and notify Oasis immediately.
        </p>
        <p>
            Client shall not allow any person or entity to access Oasis' system and shall not share its password with any person or entity,
            except for Client's leased employees.
        </p>
        <p>
            You ("Client") are about to enter information regarding employee compensation which is governed by Federal, State and local
            laws. It is your responsibility to understand and comply with these laws as they apply to your situation. Under no
            circumstances will Oasis or any of its employees or affiliates of Oasis be responsible for ensuring your compliance
            with the law. By clicking on the "I agree" button below, you acknowledge your agreement to the above provisions as
            well as the terms of the Service Agreement, and your responsibility to understand and comply with all Federal, State
            and local laws, including without limitation employee compensation laws, and you agree to indemnify and hold harmless
            Oasis from any Breach or violation thereof.
        </p>`
    };

    agreementEmployee: IAgreement = {
        content: `
        <p>
            Your password allows access to your personal information contained on this website. It is your responsibility to ensure that your password remains confidential and not to share it with others.
        </p>
        <p>
            Remember that anyone who obtains your password will be able to access the information contained in your account and may be able to change information associated with your account. You are responsible for any and all activities that occur in connection with your account and your password.
        </p>
        <p>
            If you believe your password may have been compromised, you should immediately change your password and notify your system administrator.
        </p>
        <p>
            By clicking on the "I Agree" button below, you acknowledge that you understand and agree with the terms above.
        </p>`
    };

    constructor(
        private http: HttpClient) { }

    getCheckForAgreement(userType): boolean {
        this.userType = userType;
        let showAgreement = null;
        if (userType.toLowerCase() === UserType.client) {
          showAgreement = localStorage.getItem('userClientConsent');
        } else if (userType.toLowerCase() === UserType.employee) {
          showAgreement = localStorage.getItem('userEmployeeConsent');
        }
        console.log(showAgreement);
        if (showAgreement === null) {
            return true;
        } else if (showAgreement === 'agreed') {
            return false;
        }
    }

    getAgreementContent(userType): IAgreement {
        this.userType = userType;
        if (userType.toLowerCase() === UserType.client) {
            return this.agreementClient;
        } else if (userType.toLowerCase() === UserType.employee) {
            return this.agreementEmployee;
        }
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

  public getUserType() {
    return this.userType;
  }
}
