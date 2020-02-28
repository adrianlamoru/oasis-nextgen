export interface IClientEmployeeJobRates {
    id: number;
    jobType: IClientEmployeeJobRatesType;
    standardRate: string;
    payType: IClientEmployeeJobRatesPayCodeType;
    payRate: string;
    multFactor: string;
    actualRate: string;
}

export interface IClientEmployeeJobRatesType {
    id: number;
    code: string;
}

export interface IClientEmployeeJobRatesPayCodeType {
    id: number;
    code: string;
}
