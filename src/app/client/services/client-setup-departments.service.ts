import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientSetupDepartmentsService {

  // private urlPrefix = 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/';
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getDepartmentsData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetDepartments,
      body,
      options
    );
  }

  setDepartmentsData(departmentData) {
    const body = {JSONIN: departmentData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetDepartments,
      body,
      options
    );
  }

}
