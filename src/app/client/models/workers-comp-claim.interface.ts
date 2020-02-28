export interface IWorkersCompClaimCaseDetails {
    detailsDate: string;
    detailsUpdateBy: string;
    detailsActionTaken: string;
    detailsDesc: string;
}

export interface IWorkersCompClaim {
    employeeName: string;
    employeeTitle: string;
    employeeCompany: string;
    claim: string;
    status: string;
    injury: string;
    updated: string;
    claimType: string;
    details: IWorkersCompClaimCaseDetails[];
}
