
export interface PayrollDeductionSummary {
    deductionCode: string;
    description: string;
    ssn: string;
    employeeName: string;
    amount: string;
    date: Date;
    totalRow: boolean;
}