export interface AlertData {
    type: string;
    message: string;
    time: string;
}

export interface AlertModal {
    isNew: boolean;
    alertsList: AlertData[];
}
