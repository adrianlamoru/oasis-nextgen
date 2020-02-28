import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class ClientSetupDivisionsService {

  // urlPrefix = 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/';
  header = new HttpHeaders({'Content-Type': 'application/json'});
  public divisionData: any;

  constructor(private http: HttpClient) { }

  // ******************** TRYING INTEGRATION ******************* //

  getDivisionsData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetDivision,
      body,
      options
    );
  }

  setDivisionsData(divisionData) {
    const body = {JSONIN: divisionData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetDivision,
      body,
      options
    );
  }

  // ***************** END OF TRY - INTEGRATION **************** //

}
