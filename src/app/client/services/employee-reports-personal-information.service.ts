import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  EmployeeReportsEmployeePersonalInformation } from '../models';


@Injectable()
export class EmployeeReportsPersonalInformationService {

  employeeReportsEmployeePersonalInformation: EmployeeReportsEmployeePersonalInformation[] = [
        {
          employeeId: 'A17447',
          employeeEmployementInformation: [
            {
                clientName: 'S S W DESIGNS',
                jobTitle: 'THINKER',
                jobCode: 'Thinker',
                jobDate: '05/01/2008',
                status: 'ACTIVE',
                statusDate: '06/29/2011',
                type: 'FULL TIME',
                typeDate: '06/29/2011',
                benefitGroup: '1-PRIMARY',
                benefitDate: '05/15/2016',
                workShift: '',
                projCode: 'PROJ-1',
                department: '100-HAPPY',
                division: '1-SOUTH FLORIDA',
                location: '1-MAIN',
                unionCode: '',
                clockNumber: '',
                payGroup: 'WKLYDEMO-S',
                wcClassCode: '5507',
                peoStartDate: '05/01/2008',
                clientStartDate: '05/01/2008',
                employerId: '18',
            }],
            employeeAddress: [
            {
                homeAdd: '5145 corvette Dr',
                apt: '',
                zip: '33624',
                city: 'Tampa',
                state: 'FL',
                email: 'dmills@oasisadvantage.com',
                mailingAdd: '',
                mailApt: '',
                mailZip: '',
                mailCity: '',
                mailState: '',
                w2MailingAdd: '',
                w2Apt: '',
                w2Zip: '',
                w2City: '',
                w2State: '',
            }],
            employeeCompensation: [
              {
                payRate: 5769.23,
                payPeriod: 'W -Weekly',
                annualizedPay: 300000.00,
                hours: 40.00,
                autoAccept: 'Yes',
                defaultTSHours: 40.00,
                dailyTimesheets: 'No',
                lastHireDate: '05/01/2008',
                origHireDate: '5/01/2008',
                seniorityDate: '05/01/2008',
                peoStartDate: '05/01/2008',
                lastReview: '05/01/2008',
                leaveReturnDate: '',
                reasonTerm: '125-JOB ELIMINATED-48 HR. NOTICE',
              }],
            employeeFedTax: [
              {
                filingStatus: 'S - Single',
                withHolding: 1,
                overrideType: 'F - Fixed Amount',
                overrideAmount: 100,
                eicFileStatus: 'S - Single',
                w4FiledYear: 2014,
                w5FiledYear: 2015,
                completedINSForm: 'Yes',
                ircaIdentification: '123456',
                ircaEligibility: 'yes',
                alienRegistration: '123456',
                renewDate: '05/01/2008',
                ficaExempt: 'No'
              }],
            employeeStateTax: [
              {
                state: 'FL',
                filingStatus: '1',
                altCalc: '',
                allowance: 1,
                secondaryAllowance: 2,
                exemption: 1,
                suppExemption: 2,
                nonResCert: 'No',
                nonResCertYear: null,
                overrideType: 'F - Fixed Amount',
                overrideAmount: 100
            },
            {
              state: 'GA',
              filingStatus: '2',
              altCalc: '',
              allowance: 1,
              secondaryAllowance: 2,
              exemption: 1,
              suppExemption: 2,
              nonResCert: 'No',
              nonResCertYear: null,
              overrideType: 'F - Fixed Amount',
              overrideAmount: 500
          }],
          employeeOther: [
            {
              handicapped: 'No',
              smoker: 'No',
              courtOrderedMed: 'No',
              hawaiiMedWaiver: 'No',
              mailCheckHome: 'No',
              officer: 'No',
              citizenship: 'Yes',
              licensePlate: 'L12345',
              driversLicense: 'S-123-456-789',
              licenseExpirationDate: '12/31/2018',
              stateIssuingLicense: 'FL',
              serviceMedalVet: 'No',
              blind: 'No',
              disabledVet: 'No',
              taxCreditEmployee: 'No',
              ohioFormC112Signed: 'No',
              sCorpPrincipal: 'No',
              vietnamVet: 'No',
              handbookMailed: 'Yes',
              handbookReceived: 'Yes',
              maxGarnishmentPercent: '5%',
              clockNumber: 'L12345',
              newlySeparatedVet: 'No',
              activeDutyBadgeVet: 'No',
            }]
          }];

  private EmployeeReportsPersonalInformationUrl = 'api/EmployeeReportsEmployeeInformationReport';

  constructor(
    private http: HttpClient) { }

  getEmployeeEmployementInfo() {
    return this.employeeReportsEmployeePersonalInformation;
  }

  getEmployeeAddress() {
    return this.employeeReportsEmployeePersonalInformation;
  }

  getEmployeeCompensation() {
    return this.employeeReportsEmployeePersonalInformation;
  }

  getEmployeeFedTax() {
    return this.employeeReportsEmployeePersonalInformation;
  }

  getEmployeeStateTax() {
    return this.employeeReportsEmployeePersonalInformation;
  }

  getEmployeeOther() {
    return this.employeeReportsEmployeePersonalInformation;
  }

  /** Log a HeroService message with the MessageService */
  private log(message: 'abcd') {

  }
}
