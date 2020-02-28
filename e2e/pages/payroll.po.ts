import { browser, by, element, protractor } from 'protractor';

export class PayrollPage {

  //Scheduled Batch fields
  actions = element(by.css('.payroll-batches>div:first-of-type tbody>tr:first-of-type>td:last-of-type .dx-menu-item-popout'));
  open = element(by.css('.dx-submenu .dx-menu-item-wrapper:nth-of-type(1)'));

  //Manual Check fields
  manualCheckBtn = element(by.buttonText('Manual Check'));
  searchEmployeeInput = element(by.css('input[placeholder="Search Employee"]'));
  selectEmployeeBtn = element(by.buttonText('SELECT'));
  typeAheadResult = element(by.css('ngb-typeahead-window>button.dropdown-item:first-of-type'));
  nextBtn = element(by.buttonText('NEXT'));
  submitBtn = element(by.buttonText('SUBMIT'));
  backToPayrollBtn = element(by.buttonText('Back to Payroll'));

  //Manual Check validation
  manualCheckStepTitle = element(by.css('.title'));
  confirmation = element(by.css('span.card-title'));
  payrollTitle = element(by.css('h2'));

  //Off Cycle fields
  offCycleBatchBtn = element(by.buttonText('Off-Cycle Batch'));
  batchDescriptionInput = element(by.css('dx-text-box [autocomplete]'));
  payDate = element(by.css('form .form-group:nth-of-type(2) [ng-reflect-day-template]'));
  periodStartDate = element(by.css('form .form-group:nth-of-type(3) [ng-reflect-day-template]'));
  periodEndDate = element(by.css('form .form-group:nth-of-type(4) [ng-reflect-day-template]'));
  payPeriodDropdown = element(by.css('h4+dx-select-box >div>div>input'));
  dropDownSelector1 = element(by.css('[role="option"]:nth-of-type(1)'));
  offCycleBatchConfirm = element(by.buttonText('Confirm'));

  //Off Cycle validation fields
  frequencyValidator = element(by.css('div.data-grid-container:last-of-type tr:nth-last-of-type(2)>td:nth-of-type(2)>div>div>span:last-of-type'));
  statusValidator = element(by.css('div.data-grid-container:last-of-type tr:nth-last-of-type(2)>td:nth-of-type(3)>div>div>span:last-of-type'));
  locationValidator = element(by.css('div.data-grid-container:last-of-type tr:nth-last-of-type(2)>td:nth-of-type(4)>div>div>span:last-of-type'));
  checkDateValidator = element(by.css('div.data-grid-container:last-of-type tr:nth-last-of-type(2)>td:nth-of-type(5)>div>div>div>span:last-of-type'));


  //Action methods. These take parameters from the spec files.
  navigateTo() {
    return browser.get('/client/payroll/run');
  }

  newScheduledBatch() {
    var until = protractor.ExpectedConditions;
    browser.wait(until.visibilityOf(this.actions), 10000, 'Cannot find a scheduled batch');
    this.actions.click();
    this.open.click();
  }

  newManualBatch(employeeName) {
    var until = protractor.ExpectedConditions;
    this.manualCheckBtn.click();
    this.searchEmployeeInput.clear();
    this.searchEmployeeInput.sendKeys(employeeName);
    browser.wait(until.visibilityOf(this.typeAheadResult), 5000, 'Employee name not found in TypeAhead');
    this.typeAheadResult.click();
    this.selectEmployeeBtn.click();
  }

  clickNext() {
    this.nextBtn.click();
  }

  clickSubmit() {
    this.submitBtn.click();
  }

  clickBackToPayroll() {
    this.backToPayrollBtn.click();
  }

  //validate the user's name is correct on all steps.
  getStepTitle() {
    return this.manualCheckStepTitle.getText();
  }

  //validate "congratulations" message
  getConfirmation() {
    return this.confirmation.getText();
  }
  //use to validate return to Payroll page.
  getPayrollTitle() {
    return this.payrollTitle.getText();
  }

  newOffCycleBatch(descriptionInput, payDateInput, startDateInput, endDateInput) {
    this.offCycleBatchBtn.click();
    this.batchDescriptionInput.clear();
    this.batchDescriptionInput.sendKeys(descriptionInput);
    this.payDate.clear();
    this.payDate.sendKeys(payDateInput);
    this.periodStartDate.clear();
    this.periodStartDate.sendKeys(startDateInput);
    this.periodEndDate.clear();
    this.periodEndDate.sendKeys(endDateInput);
    this.payPeriodDropdown.click();
    this.dropDownSelector1.click();
    this.offCycleBatchConfirm.click();
  }

  getFrequency() {
    return this.frequencyValidator.getText();
  }

  getStatus() {
    return this.statusValidator.getText();
  }

  getLocation() {
    return this.locationValidator.getText();
  }

  getCheckDate() {
    return this.checkDateValidator.getText();
  }
}