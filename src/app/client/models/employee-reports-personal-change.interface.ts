export interface EmployeeReportsPersonalChange {
    name: string;
    fieldName: string;
    beforeValue: number;
    afterValue: number;
    dateChanged: Date;
    empId: string;
}
