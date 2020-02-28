import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientSetupProjectsService {
  private header = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getProjectsData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetProjects,
      body,
      options
    );
  }

  setProjectsData(projectData) {
    const body = {JSONIN: projectData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetProjects,
      body,
      options
    );
  }

}
