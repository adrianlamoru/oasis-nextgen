export interface StepWidget {
    step: number;
    stepName: string;
    subSteps: number;
    status: string;
    date: Date;
    percent: number;
    color: string;
    img: string;
    error: boolean;
}
