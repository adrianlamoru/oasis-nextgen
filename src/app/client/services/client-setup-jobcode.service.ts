import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientSetupJobcodeService {
  private header = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getJobCodeData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetJobCode,
      body,
      options
    );
  }

  setJobCodeData(evnetsData) {
    const body = {JSONIN: evnetsData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetJobCode,
      body,
      options
    );
  }


}
