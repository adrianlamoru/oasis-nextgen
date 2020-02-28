export interface EmployeeBasicDetails {
    employeeId: string;
    firstName: string;
    lastName: string;
}

export interface GroupByValueSet {
    groupBy: string;
    groupByTimeBased?: string;
    val: number;
    employeeList: EmployeeBasicDetails[];
}

export interface PieData {
    arg: string;
    val?: number;
    activityGroup?: string;
    groupByValueSet?: GroupByValueSet[];
    employeeList?: EmployeeBasicDetails[];
}

export interface KeyNameValueData {
    key: string;
    name: string;
    value?: number;
}

export interface HistogramData {
    arg: string;
    vals: KeyNameValueData[];
}

export interface StackedData {
    arg: string;
    val1: number;
    val2: number;
}

export interface StackedHorizontalData {
    support: string;
    new: number;
    open: number;
    complete: number;
    in_progress: number;
}

export interface AreaData {
    arg: Date;
    val: number;
}

export interface AxisData {
    field: string;
    name: string;
}

export interface SpiderdataSet {
    arg: string;
    cat1?: number;
    cat2?: number;
    cat3?: number;
    cat4?: number;
    cat5?: number;
    cat6?: number;
    cat7?: number;
    cat8?: number;
    cat9?: number;
    cat10?: number;
}

export interface SpiderData {
    axisData: AxisData[];
    dataSet: SpiderdataSet[];
}
