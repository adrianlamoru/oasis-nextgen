export interface IClientEmployeePTO {
    // id: number;
    ptoType: string;
    // ptoData: IClientEmployeePTOData[];
    carryOverExpiresDate: string;
    ptoDescription: string;
    yearEndDate: string;
    carryOver: string;
    hoursAccrued: string;
    hoursTaken: string;
    hoursAvailable: string;
    accruedThruDate: string;
  }

// export interface IClientEmployeePTOData {
//     carryOverHours: string;
//     ytdHoursAccrued: string;
//     ytdHoursTaken: string;
//     ytdHoursAvailable: string;
//     accruedThrough: string;
//     yearEnd: string;
// }
