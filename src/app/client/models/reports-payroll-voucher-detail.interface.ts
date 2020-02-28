export interface PayrollVoucherDetail {
    batchNo: string;
    empName: string;
    empSsn: string;
    empId: string;
    payDate: Date;
    periodBegin: Date;
    periodEnd: Date;
    regHours: number;
    premHours: number;
    grossPay: number;
    fedIncTax: number;
    fica: number;
    stateIncTax: number;
    otherTaxes: number;
    payrollDeducts: number;
    netPay: number;
    weeksWorked: number;
}
