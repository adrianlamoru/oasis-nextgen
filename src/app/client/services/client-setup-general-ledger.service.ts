import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientSetupGeneralLedgerService {
  header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getGeneralLedgerData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetGLAccSysDetails,
      body,
      options
    );
  }

  setGeneralLedgerData(accountsData) {
    const body = {JSONIN: accountsData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetGLAccSysDetails,
      body,
      options
    );
  }

  deleteGeneralLedgerData(accountsData) {
    const body = {JSONIN: accountsData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupDeleteGLAccSysDetails,
      body,
      options
    );
  }

}
