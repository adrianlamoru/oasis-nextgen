import { PaySummary } from './pay-summary.interface';

export interface MyPaySummary extends PaySummary {
    deductions: number;

    taxes: number;
}
