export interface PayrollAnalytics {
    invoice: string;
    invoiceDate: Date;
    status: string;
    batch: string;
    rosterId?: string;
    batchDescription: string;
    invoiceAmount: number;
    invoiceBalance: number;
}

export interface PayrollAnalyticsInvoice {
    employeeName: string;
    employeeID: string;
    payStub: string;
    grossPayroll: number;
    adminFee: number;
    netBenefits: number;
    deductions: number;
    workersComp: number;
    comTaxes: number;
    totalInvoice: number;
    cashPayments: number;
    totalTaxes: number;
    totalDeductions: number;
    netAmount: number;
}
