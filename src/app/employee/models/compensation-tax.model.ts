export class CompensationTax {
    federalIncomeTax: number;
    ficaMedicare: number;
    ficaOasdi: number;
    total: number;
    id: number;

    constructor(id: number, federalIncomeTax: number, ficaOadi: number, ficaMedicare: number) {
        this.federalIncomeTax = federalIncomeTax;
        this.ficaMedicare = ficaMedicare;
        this.ficaOasdi = ficaOadi;
        this.id = id;
        this.total = this.federalIncomeTax + this.ficaMedicare + this.ficaOasdi;
    }
}
