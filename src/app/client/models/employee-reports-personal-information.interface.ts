export interface EmployeeReportsEmployeePersonalInformation {

    employeeId: string;
    employeeEmployementInformation: IEmployeeReportsEmployeeEmployementInfo[];
    employeeAddress: IEmployeeReportsEmployeeAddress[];
    employeeCompensation: IEmployeeReportsEmployeeCompensation[];
    employeeFedTax: IEmployeeReportsEmployeeFedTax[];
    employeeStateTax: IEmployeeReportsEmployeeStateTax[];
    employeeOther: IEmployeeReportsOther[];
}


export interface IEmployeeReportsEmployeeEmployementInfo {
    clientName: string;
    jobTitle: string;
    jobCode: string;
    jobDate: string;
    status: string;
    statusDate: string;
    type: string;
    typeDate: string;
    benefitGroup: string;
    benefitDate: string;
    workShift: string;
    projCode: string;
    department: string;
    division: string;
    location: string;
    unionCode: string;
    clockNumber: string;
    payGroup: string;
    wcClassCode: string;
    peoStartDate: string;
    clientStartDate: string;
    employerId: string;
    // employeeId: string;
}

export interface IEmployeeReportsEmployeeAddress {
    homeAdd: string;
    apt: string;
    zip: string;
    city: string;
    state: string;
    email: string;
    mailingAdd: string;
    mailApt: string;
    mailZip: string;
    mailCity: string;
    mailState: string;
    w2MailingAdd: string;
    w2Apt: string;
    w2Zip: string;
    w2City: string;
    w2State: string;
}

export interface IEmployeeReportsEmployeeCompensation {
    payRate: number;
    payPeriod: string;
    annualizedPay: number;
    hours: number;
    autoAccept: string;
    defaultTSHours: number;
    dailyTimesheets: string;
    lastHireDate: string;
    origHireDate: string;
    seniorityDate: string;
    peoStartDate: string;
    lastReview: string;
    leaveReturnDate: string;
    reasonTerm: string;
}

export interface IEmployeeReportsEmployeeFedTax {
    filingStatus: string;
    withHolding: number;
    overrideType: string;
    overrideAmount: number;
    eicFileStatus: string;
    w4FiledYear: number;
    w5FiledYear: number;
    completedINSForm: string;
    ircaIdentification: string;
    ircaEligibility: string;
    alienRegistration: string;
    renewDate: string;
    ficaExempt: string;
}

export interface IEmployeeReportsEmployeeStateTax {
    state: string;
    filingStatus: string;
    altCalc: string;
    allowance: number;
    secondaryAllowance: number;
    exemption: number;
    suppExemption: number;
    nonResCert: string;
    nonResCertYear?: number;
    overrideType: string;
    overrideAmount: number;
}

export interface IEmployeeReportsOther {
    handicapped: string;
    smoker: string;
    courtOrderedMed: string;
    hawaiiMedWaiver: string;
    mailCheckHome: string;
    officer: string;
    citizenship: string;
    licensePlate: string;
    driversLicense: string;
    licenseExpirationDate: string;
    stateIssuingLicense: string;
    serviceMedalVet: string;
    blind: string;
    disabledVet: string;
    taxCreditEmployee: string;
    ohioFormC112Signed: string;
    sCorpPrincipal: string;
    vietnamVet: string;
    handbookMailed: string;
    handbookReceived: string;
    maxGarnishmentPercent: string;
    clockNumber: string;
    newlySeparatedVet: string;
    activeDutyBadgeVet: string;
}
