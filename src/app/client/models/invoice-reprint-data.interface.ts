export interface InvoiceReprintData {
    serviceDescription: string;
    amount: number;
}

export interface InvoiceReprintDataNumber {
    invoiceNumber: number;
    deptCode: string;
    deptName: string;
    invoiceReprintDataList: InvoiceReprintData[];
}
