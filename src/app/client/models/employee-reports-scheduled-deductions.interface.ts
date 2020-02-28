export interface EmployeeReportScheduledDeductions {
    deductionCode: string;
    description: string;
    amount: number;
    periods: string;
    benefitPlan: string;
    limit?: number;
    maximum?: number;
    basis?: string;
    trackArrears?: string;
    startDate?: Date;
    stopDate?: Date;
    glOverrideAcct?: string;
}
