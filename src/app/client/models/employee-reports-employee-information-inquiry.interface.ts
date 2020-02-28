export interface EmployeeReportsEmployeeInformationInquiry {

    clientId: number;
    employeeId: string;
    employeeGeneralInformation: IEmployeeGeneralInformation[];
    employeeDirectDeposit: IEmployeeDirectDeposit[];
    employeeStateGovernment: IEmployeeStateGovernment[];
    employeeFederalGovernment: IEmployeeFederalGovernment[];
    employeeEmergencyInformation: IEmployeeEmergencyInformation[];
    employeeOtherItems: IEmployeeOtherItems[];
}

export interface IEmployeeGeneralInformation {

    ssn: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    address1: string;
    address2?: string;
    zip: string;
    city: string;
    state: string;
    homePhone: string;
    peoStartDate: Date;
    clientStartDate: Date;
    status: string;
    statusDate: Date;
    employeeType: string;
    currentPayPeriod: string;
    currentPayRate: number;
    payMethod: string;
    currentAnnualizedPay: number;
    payGroup: string;
    workShift?: string;
    locationCode?: string;
    benefitCode?: string;
    divisionCode?: string;
    departmentCode?: string;
    employerID: string;
    jobCode: string;
    projectCode?: string;
    employeeNumber?: string;
    birthDate: Date;
    gender: string;
    ethnicity: string;
    maritalStatus: string;
    unionCode?: string;
    standardHours: number;
    autoAcceptTS: string;
    defaultTSHours: number;
    emailAddress?: string;
    dailyTimesheets: string;
    termReason?: string;
    nickname?: string;
    age?: number;
}

export interface IEmployeeDirectDeposit {
    type?: string;
    account?: string;
    amount?: number;
    status?: string;
}

export interface IEmployeeStateGovernment {
    state?: string;
    filingStatus?: string;
    altCalc?: number;
    allowances?: number;
    secondaryAllowances?: number;
    exemption?: number;
    supplementaryExemption?: number;
    nrCertificate?: string;
    overrideType?: string;
    overrideNumber?: number;
    w4Filed?: string;
    w4Year?: number;
}

export interface IEmployeeFederalGovernment {
    filingStatus?: string;
    withHolding?: number;
    overrideType?: string;
    overrideAmount?: number;
    eicFileStatus?: string;
    i9FormInfo?: string;
    insI9FormCompleted?: string;
    ircaIdNumber?: string;
    alienRegistrationNumber?: string;
    ircaEligibilityDocument?: string;
    w4Filed?: string;
    w4Year?: number;
    w5Filed?: string;
    w5Year?: number;
    renewDate?: Date;
    ficaExempt?: string;
}

export interface IEmployeeEmergencyInformation {
    contactName: string;
    relation: string;
    telephone: string;
}

export interface IEmployeeOtherItems {
    handicapped?: string;
    smoker?: string;
    courtOrderedMedical?: string;
    hawaiiMedicalWaiver?: string;
    mailCheckHome?: string;
    officer?: string;
    citizenship?: string;
    licensePlateNumber?: string;
    driverLicenseNumber?: string;
    licenseExpiresDate?: Date;
    stateIssuingLicense?: string;
    serviceMedalVet?: string;
    blind?: string;
    disabledVet?: string;
    taxCreditEmployee?: string;
    ohioFormC112Signed?: string;
    sCorpPrincipal?: string;
    vietnamVet?: string;
    handbookMailed?: string;
    handbookReceived?: string;
    maxGarnishmentPercent?: string;
    clockNumber?: string;
    newlySeparatedVet?: string;
    activeDutyBadgeVet?: string;
}





