import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientSetupWorksiteupdateService {
  private header = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getWorkSiteData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetWorkSite,
      body,
      options
    );
  }

  setWorkSiteData(workSiteData) {
    const body = {JSONIN: workSiteData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetWorkSite,
      body,
      options
    );
  }

  // Work site contacts
  getWorkSiteContactsData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetWorkSiteContacts,
      body,
      options
    );
  }

  setWorkSiteContactsData(workSiteData) {
    const body = {JSONIN: workSiteData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetWorkSiteContacts,
      body,
      options
    );
  }
  // End of work site contacts
}
