export interface EarningsSummary {
    locationCodeID: string;
    locationDesc: string;
    deptCodeID: string;
    deptDesc: string;
    divisionCodeID: string;
    divisionDesc: string;
    empName: string;
    empId: string;
    empSsn: string;
    payCodeID: string;
    payCodeDesc: string;
    hoursUnits: number;
    amountPaid: number;
    payDate: Date;
}