export interface HrEmployeePersonalChange {
    name: string;
    fieldName: string;
    beforeValue: number;
    afterValue: number;
    dateChanged: Date;
    employeeID?: string;
}
