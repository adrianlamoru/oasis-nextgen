export interface EmployeeBenefitsRegister {
    iD: string;
    name: string;
    jobTitle: string;
    benefitGroup: number;
    planId: string;
    status: string;
    coverageEffDate: any; // Date
    planType: string;
    empSpouseDepCoverage: number;
    premiumAmtBilled: number;
    companyContrib: number;
    employeeContrib: number;
    hawaiiPercent: number;
}