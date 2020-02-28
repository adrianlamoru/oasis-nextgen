import { LoginPage } from '../pages/login.po';
import { PayrollPage } from '../pages/payroll.po';
import { protractor, browser, by, element, until } from 'protractor';

describe('Regular Payroll Workflow', () => {
  let page: LoginPage;
  let payrollPage: PayrollPage;
  browser.driver.manage().window().maximize();

  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
    page.clickSignIn();
    //if the Terms and Conditions appear, agree to them.
    page.agreeIfPresent();
  });

  it('1: Scheduled Batch', () => {
    var confirmationMessage = "Congratulations, you are all done!"
    payrollPage = new PayrollPage();
    payrollPage.navigateTo();
    browser.ignoreSynchronization = true;
    payrollPage.newScheduledBatch();
    payrollPage.clickNext();
    payrollPage.clickNext();
    payrollPage.clickSubmit();
    expect(payrollPage.getConfirmation()).toEqual(confirmationMessage);
    payrollPage.clickBackToPayroll();
    expect(payrollPage.getPayrollTitle()).toEqual('Payroll');

    /* validate that when the same batch is clicked, 
    the workflow is completed and "congratulations" msg is displayed */
    payrollPage.newScheduledBatch();
    expect(payrollPage.backToPayrollBtn.isDisplayed());
    payrollPage.clickBackToPayroll();
    expect(payrollPage.getPayrollTitle()).toEqual('Payroll');
  });

  it('2: Off Cycle Batch with no changes should be submitted successfully', () => {
    var description = 'New Automated Description';
    var payDate = 'September 1, 2018';
    var startDate = 'September 2, 2018';
    var endDate = 'September 3, 2018';
    payrollPage = new PayrollPage();
    payrollPage.navigateTo();
    browser.ignoreSynchronization = true;
    payrollPage.newOffCycleBatch(description, payDate, startDate, endDate);
    expect(payrollPage.getFrequency()).toEqual('Employee Assigned');
    expect(payrollPage.getStatus()).toEqual('New');
    expect(payrollPage.getLocation()).toEqual(description);
    expect(payrollPage.getCheckDate()).toEqual(payDate);
  });

  it('3: Manual Check workflow should succeed all steps for the selected employee', () => {
    var employeeName = "Mattie Jones";
    var confirmationMessage = "Congratulations, you are all done!"
    payrollPage = new PayrollPage();
    payrollPage.navigateTo();
    browser.ignoreSynchronization = true;
    payrollPage.newManualBatch(employeeName);
    payrollPage.clickNext();
    expect(payrollPage.getStepTitle()).toEqual(employeeName + ' - Manual');
    payrollPage.clickNext();
    expect(payrollPage.getStepTitle()).toEqual(employeeName + ' - Manual');
    payrollPage.clickSubmit();
    expect(payrollPage.getConfirmation()).toEqual(confirmationMessage);
    payrollPage.clickBackToPayroll();
    expect(payrollPage.getPayrollTitle()).toEqual('Payroll');
  });
});
