export interface IEmployeeHistory {
    id: string;
    date: Date;
    jobTitle: string;
    jobCode: string;
    statusCode: string;
    typeCode: string;
    payHistory: IPayHistory[];
    isOpened: boolean; // view purpose
}

export interface IPayHistory {
    dateEffective: Date;
    rateOfPayPer: number;
    stdHours: number;
    changePercent: number;
    changeAmount: number;
}
