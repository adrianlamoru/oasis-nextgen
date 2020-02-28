export interface CurrentValueFormat {
    label: string;
    value: any;
    type: number;
}

export enum CurrentValueType {
    string = 1,
    number = 2,
    date = 3,
    currency = 4
}
