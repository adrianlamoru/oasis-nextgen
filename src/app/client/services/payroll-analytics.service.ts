import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PayrollAnalytics, PayrollAnalyticsInvoice, Roster } from '../models';
import { AreaData, PieData } from '../../shared/models';

@Injectable()
export class PayrollAnalyticsService {

  payrollAnalytics: PayrollAnalytics[];
  payrollAnalyticsInvoice: PayrollAnalyticsInvoice[];

  public payrollAnalitycsAreaChartDataSource: AreaData[];

  pieDataSource: PieData[];

  constructor(private http: HttpClient) {
    this.initAnalytics();
    this.initPayrollAnalyticsAreaChart();
    this.initPayrollAnalyticsPieChartDataSource();
    this.initPayrollAnalyticsInvoice();
  }

  /**
    * Return data source for Payroll Analitycs filtered by year
    */
  getPayrollAnalytics(year?: number): PayrollAnalytics[] {
    return this.payrollAnalytics.filter(pa => year ? pa.invoiceDate.getFullYear() === year : true);
  }

  /**
   * Returns data source for payroll analitycs area chart
   * @returns { AreaData[] } data source
   */
  public getPayrollAnalyticsAreaChartDataSource(): AreaData[] {
    return this.payrollAnalitycsAreaChartDataSource;
  }

  /**
   * Return gross for payroll analitycs area chart
   * @returns { number } The gross
   */
  public getPayrollAnalyticsAreaChartGross(): number {
    return 29000;
  }

  /**
   * Return net for payroll analitycs area chart
   * @returns { number } The net
   */
  public getPayrollAnalyticsAreaChartNet(): number {
    return 23000;
  }

  /**
   * Returns data source for payroll analitycs pie chart
   * @returns { PieData[] } data source
   */
  public getPayrollAnalyticsPieChartDataSource(): PieData[] {
    return this.pieDataSource;
  }

  /**
   * Returns data source for payroll analitycs invoice summary
   */
  public getPayrollAnalyticsInvoice(): PayrollAnalyticsInvoice[] {
    return this.payrollAnalyticsInvoice;
  }

  public addRosterToHistory(roster: Roster) {

    this.payrollAnalytics.push({
      invoice: '005411',
      invoiceDate: new Date(),
      status: 'In Progress',
      batch: roster.batchNumber,
      rosterId: roster.id,
      batchDescription: roster.description ? roster.description : roster.location,
      invoiceAmount: 8090.16,
      invoiceBalance: 8090.16
    });
  }

  initAnalytics() {
    this.payrollAnalytics = [{
      invoice: '005405',
      invoiceDate: new Date(2016, 6, 20),
      status: 'Completed',
      batch: '201623',
      batchDescription: '05-20-16 WKLYDEMO',
      invoiceAmount: 8090.16,
      invoiceBalance: 8090.16
    }, {
      invoice: '005394',
      invoiceDate: new Date(2016, 5, 13),
      status: 'Completed',
      batch: '201622',
      batchDescription: '04-13-16 WKLYDEMO',
      invoiceAmount: 8070.16,
      invoiceBalance: 8070.16
    }, {
      invoice: '005405',
      invoiceDate: new Date(2016, 6, 20),
      status: 'Completed',
      batch: '201623',
      batchDescription: '05-20-16 WKLYDEMO',
      invoiceAmount: 8090.16,
      invoiceBalance: 8090.16
    }, {
      invoice: '005383',
      invoiceDate: new Date(2017, 6, 6),
      status: 'Completed',
      batch: '201721',
      batchDescription: '05-05-17 WKLYDEMO',
      invoiceAmount: 8119.52,
      invoiceBalance: 8119.52
    }, {
      invoice: '005472',
      invoiceDate: new Date(2017, 5, 29),
      status: 'Completed',
      batch: '201720',
      batchDescription: '04-29-17 WKLYDEMO',
      invoiceAmount: 1130.16,
      invoiceBalance: 1130.16
    }, {
      invoice: '005486',
      invoiceDate: new Date(2018, 8, 11),
      status: 'Completed',
      batch: '201852',
      batchDescription: '07-11-18 WKLYDEMO',
      invoiceAmount: 2976.54,
      invoiceBalance: 2976.54
    }, {
      invoice: '005491',
      invoiceDate: new Date(2018, 6, 23),
      status: 'Completed',
      batch: '201894',
      batchDescription: '05-23-18 WKLYDEMO',
      invoiceAmount: 1140.16,
      invoiceBalance: 1140.16
    }, {
      invoice: '005511',
      invoiceDate: new Date(2018, 8, 6),
      status: 'Completed',
      batch: '201823',
      batchDescription: '07-06-18 WKLYDEMO',
      invoiceAmount: 8238.09,
      invoiceBalance: 8238.09
    }, {
      invoice: '005542',
      invoiceDate: new Date(2018, 11, 25),
      status: 'Completed',
      batch: '201896',
      batchDescription: '10-25-18 WKLYDEMO',
      invoiceAmount: 2966.62,
      invoiceBalance: 2966.62
    }];
  }

  initPayrollAnalyticsAreaChart() {
    this.payrollAnalitycsAreaChartDataSource = [{
      arg: new Date(2018, 4, 15),
      val: 22400
    }, {
      arg: new Date(2018, 4, 16),
      val: 22800
    }, {
      arg: new Date(2018, 4, 17),
      val: 23200
    }, {
      arg: new Date(2018, 4, 18),
      val: 23600
    }, {
      arg: new Date(2018, 4, 19),
      val: 24000
    }, {
      arg: new Date(2018, 4, 20),
      val: 24500
    }, {
      arg: new Date(2018, 4, 21),
      val: 25000
    }, {
      arg: new Date(2018, 4, 22),
      val: 25600
    }, {
      arg: new Date(2018, 4, 23),
      val: 26200
    }, {
      arg: new Date(2018, 4, 24),
      val: 26800
    }, {
      arg: new Date(2018, 4, 25),
      val: 27400
    }, {
      arg: new Date(2018, 4, 26),
      val: 28100
    }, {
      arg: new Date(2018, 4, 27),
      val: 28900
    }, {
      arg: new Date(2018, 4, 28),
      val: 29400
    }, {
      arg: new Date(2018, 4, 29),
      val: 29800
    }, {
      arg: new Date(2018, 4, 30),
      val: 30100
    }, {
      arg: new Date(2018, 5, 1),
      val: 18800
    }, {
      arg: new Date(2018, 5, 2),
      val: 18900
    }, {
      arg: new Date(2018, 5, 3),
      val: 19000
    }, {
      arg: new Date(2018, 5, 4),
      val: 19200
    }, {
      arg: new Date(2018, 5, 5),
      val: 19400
    }, {
      arg: new Date(2018, 5, 6),
      val: 19600
    }, {
      arg: new Date(2018, 5, 7),
      val: 19800
    }, {
      arg: new Date(2018, 5, 8),
      val: 20000
    }, {
      arg: new Date(2018, 5, 9),
      val: 20300
    }, {
      arg: new Date(2018, 5, 10),
      val: 20600
    }, {
      arg: new Date(2018, 5, 11),
      val: 20900
    }, {
      arg: new Date(2018, 5, 12),
      val: 21200
    }, {
      arg: new Date(2018, 5, 13),
      val: 21600
    }, {
      arg: new Date(2018, 5, 14),
      val: 22000
    }, {
      arg: new Date(2018, 5, 15),
      val: 22400
    }, {
      arg: new Date(2018, 5, 16),
      val: 22800
    }, {
      arg: new Date(2018, 5, 17),
      val: 23200
    }, {
      arg: new Date(2018, 5, 18),
      val: 23600
    }, {
      arg: new Date(2018, 5, 19),
      val: 24000
    }, {
      arg: new Date(2018, 5, 20),
      val: 24500
    }, {
      arg: new Date(2018, 5, 21),
      val: 25000
    }, {
      arg: new Date(2018, 5, 22),
      val: 25600
    }, {
      arg: new Date(2018, 5, 23),
      val: 26200
    }, {
      arg: new Date(2018, 5, 24),
      val: 26800
    }, {
      arg: new Date(2018, 5, 25),
      val: 27400
    }, {
      arg: new Date(2018, 5, 26),
      val: 28100
    }, {
      arg: new Date(2018, 5, 27),
      val: 28900
    }, {
      arg: new Date(2018, 5, 28),
      val: 29400
    }, {
      arg: new Date(2018, 5, 29),
      val: 29800
    }, {
      arg: new Date(2018, 5, 30),
      val: 30100
    }, {
      arg: new Date(2018, 5, 31),
      val: 30400
    }, {
      arg: new Date(2018, 6, 1),
      val: 27700
    }, {
      arg: new Date(2018, 6, 2),
      val: 28000
    }, {
      arg: new Date(2018, 6, 3),
      val: 28300
    }, {
      arg: new Date(2018, 6, 4),
      val: 28600
    }, {
      arg: new Date(2018, 6, 5),
      val: 28900
    }, {
      arg: new Date(2018, 6, 6),
      val: 29200
    }, {
      arg: new Date(2018, 6, 7),
      val: 29600
    }, {
      arg: new Date(2018, 6, 8),
      val: 30000
    }, {
      arg: new Date(2018, 6, 9),
      val: 30400
    }, {
      arg: new Date(2018, 6, 10),
      val: 30800
    }, {
      arg: new Date(2018, 6, 11),
      val: 31300
    }, {
      arg: new Date(2018, 6, 12),
      val: 31800
    }, {
      arg: new Date(2018, 6, 13),
      val: 32400
    }, {
      arg: new Date(2018, 6, 14),
      val: 33000
    }, {
      arg: new Date(2018, 6, 15),
      val: 33500
    }, {
      arg: new Date(2018, 6, 16),
      val: 34000
    }, {
      arg: new Date(2018, 6, 17),
      val: 34500
    }, {
      arg: new Date(2018, 6, 18),
      val: 35000
    }, {
      arg: new Date(2018, 6, 19),
      val: 35500
    }, {
      arg: new Date(2018, 6, 20),
      val: 36000
    }, {
      arg: new Date(2018, 6, 21),
      val: 36500
    }, {
      arg: new Date(2018, 6, 22),
      val: 37000
    }, {
      arg: new Date(2018, 6, 23),
      val: 36800
    }, {
      arg: new Date(2018, 6, 24),
      val: 36600
    }, {
      arg: new Date(2018, 6, 25),
      val: 36400
    }, {
      arg: new Date(2018, 6, 26),
      val: 36200
    }, {
      arg: new Date(2018, 6, 27),
      val: 36000
    }, {
      arg: new Date(2018, 6, 28),
      val: 35700
    }, {
      arg: new Date(2018, 6, 29),
      val: 35400
    }, {
      arg: new Date(2018, 6, 30),
      val: 35100
    }, {
      arg: new Date(2018, 5, 1),
      val: 30300
    }, {
      arg: new Date(2018, 7, 2),
      val: 30200
    }, {
      arg: new Date(2018, 7, 3),
      val: 30100
    }, {
      arg: new Date(2018, 7, 4),
      val: 30000
    }, {
      arg: new Date(2018, 7, 5),
      val: 29800
    }, {
      arg: new Date(2018, 7, 6),
      val: 29600
    }, {
      arg: new Date(2018, 7, 7),
      val: 29400
    }, {
      arg: new Date(2018, 7, 8),
      val: 29200
    }, {
      arg: new Date(2018, 7, 9),
      val: 29000
    }, {
      arg: new Date(2018, 7, 10),
      val: 28800
    }, {
      arg: new Date(2018, 7, 11),
      val: 28500
    }, {
      arg: new Date(2018, 7, 12),
      val: 28300
    }, {
      arg: new Date(2018, 7, 13),
      val: 28100
    }, {
      arg: new Date(2018, 7, 14),
      val: 27900
    }, {
      arg: new Date(2018, 7, 15),
      val: 27700
    }, {
      arg: new Date(2018, 7, 16),
      val: 27500
    }, {
      arg: new Date(2018, 7, 17),
      val: 27300
    }, {
      arg: new Date(2018, 7, 18),
      val: 27100
    }, {
      arg: new Date(2018, 7, 19),
      val: 27000
    }, {
      arg: new Date(2018, 7, 20),
      val: 26900
    }, {
      arg: new Date(2018, 7, 21),
      val: 26800
    }, {
      arg: new Date(2018, 7, 22),
      val: 26850
    }, {
      arg: new Date(2018, 7, 23),
      val: 26900
    }, {
      arg: new Date(2018, 7, 24),
      val: 26950
    }, {
      arg: new Date(2018, 7, 25),
      val: 27000
    }, {
      arg: new Date(2018, 7, 26),
      val: 27200
    }, {
      arg: new Date(2018, 7, 27),
      val: 27400
    }, {
      arg: new Date(2018, 7, 28),
      val: 27500
    }, {
      arg: new Date(2018, 7, 29),
      val: 27500
    }, {
      arg: new Date(2018, 7, 30),
      val: 27500
    }, {
      arg: new Date(2018, 7, 31),
      val: 27500
    }, ];
  }

  initPayrollAnalyticsPieChartDataSource() {
    this.pieDataSource = [{
      arg: 'New Hires',
      val: 110
    }, {
      arg: 'Pay Rate Change',
      val: 100
    }, {
      arg: 'Status Change',
      val: 72
    }, {
      arg: 'Address Change',
      val: 47
    }, {
      arg: 'Direct Deposit Change',
      val: 46
    }, {
      arg: 'Leave of Absence',
      val: 41
    }];
  }

  initPayrollAnalyticsInvoice() {
    this.payrollAnalyticsInvoice = [{
      employeeName: 'Gussie Fields',
      employeeID: 'E01',
      payStub: '005405',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Mittie Ross',
      employeeID: 'E02',
      payStub: '005406',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Evelyn Payne',
      employeeID: 'E03',
      payStub: '005407',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Lena Tran',
      employeeID: 'E04',
      payStub: '005408',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Lulu Richardson',
      employeeID: 'E05',
      payStub: '005409',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Rosa Schwartz',
      employeeID: 'E06',
      payStub: '005410',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Francis Ruiz',
      employeeID: 'E07',
      payStub: '005411',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Elijah Ryan',
      employeeID: 'E08',
      payStub: '005412',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Jerome Wilson',
      employeeID: 'E09',
      payStub: '005413',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }, {
      employeeName: 'Adrian Lowe',
      employeeID: 'E10',
      payStub: '005414',
      grossPayroll: 0,
      adminFee: 10,
      netBenefits: 20,
      deductions: 30,
      workersComp: 40,
      comTaxes: 50,
      totalInvoice: 60,
      cashPayments: 70,
      totalTaxes: 80,
      totalDeductions: 90,
      netAmount: 100,
    }
    ];
  }
}
