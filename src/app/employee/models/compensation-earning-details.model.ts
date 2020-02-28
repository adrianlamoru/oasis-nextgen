export class CompensationEarningDetails {
    id: number;
    tipCreditMakeUp: number;
    tippedHours: number;
    cashTips: number;
    halfTime: number;
    total: number;

    constructor(id: number, tipCreditMakeUp: number, tippedHours: number, cashTips: number, halfTime: number){
        this.id = id;
        this.tipCreditMakeUp = tipCreditMakeUp;
        this.cashTips = cashTips;
        this.halfTime = halfTime;
        this.tippedHours = tippedHours;
        this.total = this.tipCreditMakeUp + this.cashTips + this.halfTime + this.tippedHours;
    }
}
