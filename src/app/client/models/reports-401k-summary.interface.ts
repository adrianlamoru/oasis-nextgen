export interface ReportsEmployee401kSummary {
    iD: string;
    name: string;
    year: number;
    payDate: Date;
    base401kEarnings: number;
    eeContributionPreTax: number;
    eeContributionPostTax: number;
    employerNonElectedContrib: number;
    rothDeduction: number;
    rothCatchup: number;
    catchupContrib: number;
    loanPayments: number;
    employerMatchConditions: number;
    peoMatchContributions: number;
}