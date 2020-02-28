export interface PayrollGrossPay {
    id: string;
    grossPay: number;
    taxes: number;
    deductions: number;
    netPay: number;
}

export interface PayrollPayCode {
    id: string;
    payCode: string;
    units: number;
    payRate: number;
    payAmonut: number;
}

export interface PayrollTaxCode {
    id: string;
    taxCode: string;
    description: string;
    taxableAmount: number;
    amountWithheld: number;
}
