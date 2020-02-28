export interface IEmployeeBenefitsPlan {
    planType?: string;
    planYear: string;
    planStatus: string;
    title: string;
    description: string;
    features: any[];
    additionalInfo: IAdditionalInfo[];
    icon?: string;
    iconPath?: string;
    display?: boolean;
    websiteLink?: string;
    employeeCost?: number;
    employerCost?: number;
}

interface IAdditionalInfo {
    text?: string;
    link?: string;
}
