export interface HrEmployeeChange {
    id: string;
    name: string;
    lastHireDate: Date;
    changeType: string;
    effectiveDate: Date;
    entryDate: Date;
    valueBefore: number;
    valueAfter: number;
    use: string;
}
