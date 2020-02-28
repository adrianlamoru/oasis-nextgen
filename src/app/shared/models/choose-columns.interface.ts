export interface ChooseColumnsModal {
    type: string;
    chooseColumnsData: IChooseColumnsData[];
}

export interface IChooseColumnsData {
    id: number;
    title: string;
    state: boolean;
}
