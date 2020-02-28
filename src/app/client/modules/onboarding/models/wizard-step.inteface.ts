export interface WizardStep {
    title?: string;
    path?: string;
    id?: string;
    backPath?: string;
    nextPath?: string;
    hasErrors?: boolean;
    currentForm?: any;
    formAPIURL?: string;
    children?: WizardStep[];
}
