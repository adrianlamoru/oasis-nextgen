import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientSetupSkillMaintenanceService {
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getSkillMaintenanceData(sessionData) {
    const body = {JSONIN: {sessionToken: sessionData}};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupGetSkillMaintenance,
      body,
      options
    );
  }

  setSkillMaintenanceData(skillData) {
    const body = {JSONIN: skillData};
    const options = {headers: this.header};

    return this.http.post(environment.clientSetupSetSkillMaintenance,
      body,
      options
    );
  }
}
