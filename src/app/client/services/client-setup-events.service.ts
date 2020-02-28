import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientSetupEventsService {
  header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getEventsData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetEvents,
      body,
      options
    );
  }

  setEventsData(evnetsData) {
    const body = {JSONIN: evnetsData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetEvents,
      body,
      options
    );
  }

}
