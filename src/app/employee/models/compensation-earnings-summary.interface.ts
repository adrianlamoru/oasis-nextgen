export interface ICompensationEarningsSummary {
    id: number;
    expenseReimbursements: number;
    fringeBenefits: number;
    reportedTips: number;
    allocatedTips: number;
    grossEarnings: number;
    payrollDeductions: number;
    federalIncomeTaxes: number;
    earnedIncomeCredit: number;
    socialSecurityTaxes: number;
    medicareTaxes: number;
    stateIncomeTaxes: number;
    stateDIUITaxes: number;
    otherStateLocalTaxes: number;
    netEarnings: number;
}
