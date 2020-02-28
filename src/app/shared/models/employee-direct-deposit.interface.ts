export interface EmployeeDirectDeposit {
    id: string;

    type: string;

    transitNumber: string;

    bankName: string;

    account: string;

    amount: number;

    limit: number;

    method: string;

    status: string;

    checkImage?: any;
}
