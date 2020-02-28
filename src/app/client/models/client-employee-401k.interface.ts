export interface Employee401k {
    employeeId: number;
    employeeName: string;
    baseEarnings: number;
    eePreTaxContribution: number;
    eePostTaxContribution: number;
    erNonElectiveMatch: number;
    eeRothContribution: number;
    eeRothCatchUpContribution: number;
    eeCatchUpContribution: number;
    ee401kLoanPayments: number;
    er401kMatch: number;
    peo401kMatch: number;
    requestedYear: string;
    recordChecksum: string;
}
