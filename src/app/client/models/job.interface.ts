export interface JobCode {
    Code: string;
    Title: string;
    Description: string;
    States: number[];
    Exempt: boolean;
    JobClass: string;
    EEOJobGroup: string;
    EEOJobClass: string;
    Supervisory: boolean;
    PayGrade: string;
    SpecialRequirements: boolean;
    ProbationDays: string;
    PerDiemPercent: string;
    IsSalesPosition: boolean;
    IsTippedPosition: boolean;
    IsDOT: boolean;
    sessionToken?: string;
    statesOpened?: boolean;
}

export interface JobState {
    JobID: number;
    JobStates: number[];
}
