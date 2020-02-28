export interface ReportsGrossNetLastname {
    iD: string;
    name: string;
    totalGrossPay: string | number;
    totalExpenses: string | number;
    grossEarning: string | number;
    totalDeductions: number;
    totalTaxes: number;
    totalNetPay: number;
    batch: string;
}
