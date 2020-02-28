import { IEthnicity, IMaritalStatus, IInterRelationship, IGender, States, IAddress, IEmergencyContact } from './index';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface ClientEmployees {
    id: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    title: string;
    department: string;
    empType: string;
    empStatus: string;
    clientId: number;
    externalEmployeeId?: string;
    age?: number;
    dob?: Date;
    dobPicker?: NgbDateStruct;
    ssn?: string;
    primaryPhone?: string;
    secondaryPhone?: string;
    emailAddress?: string;
    maritalStatus?: IMaritalStatus;
    ethnicity?: IEthnicity;
    interRelationship?: IInterRelationship;
    gender?: IGender;
    homeAddress?: IAddress;
    mailingAddress?: IAddress;
    w2Address?: IAddress;
    emergencyContact?: IEmergencyContact;
}

export interface ClientLstEmployees {
    employeeId: string;
    clientId: string;
    birthDate: Date;
    firstName: string;
    homeDepartment: string;
    homeDepartmentDescription: string;
    homeDivision: string;
    homeDivisionDescription: string;
    homeLocation: string;
    homeLocationDescription: string;
    lastName: string;
    sortName: string;
    statusCode: string;
    statusDescription: string;
    titleCode: string;
    titleDescription: string;
    typeCode: string;
    typeDescription: string;
}

export interface ClientEmployeeDetails {
    employeeEmergencyContact?: [IEmergencyContact];
    employeeHomeAddress?: [IAddress];
    employeeMailingAddress?: [IAddress];
    employeeOtherDetails?: [OtherDetailsSection];
    employeePersonalDetails?: [PersonalDetailsSection];
    employeeW2Address?: [IAddress];
}

export interface PersonalDetailsSection {
    age?: string;
    birthDate?: string;
    email?: string;
		isUnsubscribeChecked?: boolean,
    employeeId?: string;
    ethnicity?: string;
    firstName?: string;
    gender?: string;
    contactPhoneNumber?: string;
    lastName?: string;
    maritalStatus?: string;
    middleName?: string;
    nickName?: string;
    ssn?: string;
    phone1?: string;
    phone2?: string;
    titleCode?: string;
    titleDescription?: string;
}

export interface OtherDetailsSection {
    employeeWebUserID: string;
    handicapped: Boolean;
    licenseExpirationDate: Date;
    newlySeparatedVet: Boolean;
    activeDutyVet: Boolean;
    scorpPrincipal: Boolean;
    hawaiiMedicalWaiver: string;
    citizenship: string;
    clockNumber: string;
    vietnamVet: Boolean;
    taxCreditEmployee: Boolean;
    driversLicenseNumber: string;
    stateIssuingLicense: string;
    disabledVet: Boolean;
    handbookMailedOn: string;
    officer: Boolean;
    courtOrderedMedical: Boolean;
    serviceMedalVet: Boolean;
    mailCheckHome: Boolean;
    licensePlateNumber: string;
    smoker: Boolean;
    handbookReceivedOn: string;
    maxGarnishment: string;
    blind: Boolean;
}

/* export interface EmergencyContactSection {
    contactName: string;
    contactPhone: string;
    relationship: string;
}

export interface HomeAddressSection {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
}

export interface MailingAddressSection {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
}

export interface W2AddressSection {
    zip?: string;
    state?: string;
    address1?: string;
    address2?: string;
    city?: string;
}
*/
