export interface ScheduledDeductionForm {
    ID: number;
    employeeName: string;
    socialSecurity: string;
    benefitPlanName: string;
    deductionAmount: number;
    deductionPeriod: any;
    planType: string;
    tracksArrears: boolean;
    effectiveDate: string;
    inserting?: boolean;
}
