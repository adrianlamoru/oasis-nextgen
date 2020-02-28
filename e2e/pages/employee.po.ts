import { protractor, browser, by, element } from 'protractor';

export class EmployeePage {

    //open/edit employee actions
    actions = element(by.css('.employees-list>span:first-of-type [value=ACTIONS]'));
    open = element(by.css('.dx-popup-content div.dx-list-group:first-of-type .dx-item-content'));
    firstUserName = element(by.css('.employees-list>span:first-of-type p.employee-name'));
    editIcon = element(by.css('span.icon-pencil'));
    profileUserName = element(by.css('div.employee-name'));
    primaryPhone = element(by.id('primaryPhone'));
    saveChanges = element(by.buttonText('Save'));

    //terminate employee actions
    terminationBtn = element(by.css('.dx-popup-content div.dx-list-group:nth-of-type(2) [role=option]:nth-of-type(3)'));
    voluntaryRadioBtn = element(by.css('.modal-body .row:first-of-type .row:first-of-type>div:first-of-type .dx-radiobutton-icon'));
    statusCodeDropdown = element(by.css('.modal-body .row:first-of-type .row:nth-of-type(3) i'));
    firstStatusCodeOption = element(by.css('.modal-body .row:first-of-type .row:nth-of-type(3) [type=button]'));
    reasonCodeDropdown = element(by.css('.modal-body .row:first-of-type .row:nth-of-type(4)>div:first-of-type i'));
    firstReasonCodeOption = element(by.css('.modal-body .row:first-of-type .row:nth-of-type(4)>div:first-of-type .dropdown-menu>button:first-of-type'));
    terminationDateInput = element(by.id('dp'));
    rehireYes = element(by.css('.modal-body .row:first-of-type .row:nth-of-type(5)>div:first-of-type [role=radio]:first-of-type .dx-radiobutton-icon'));
    achTurnOffYes = element(by.css('.modal-body .row:first-of-type .row:nth-of-type(5)>div:last-of-type [role=radio]:first-of-type .dx-radiobutton-icon'));
    confirm = element(by.css('.modal-footer .btn:last-of-type'));

    //Change pay rate fields
    payRateBtn = element(by.css('.dx-popup-content div.dx-list-group:nth-of-type(3) [role=option]:nth-of-type(1)'));
    payEditIcon = element(by.css('.rate-information-content .icon-pencil'));
    payRateInput = element(by.css('[formcontrolname=payRate]'));
    perPayRateDropdown = element(by.id('perPayRate'));
    firstPayRateOption = element(by.css('[id=perPayRate] + div button:first-of-type'));
    standardHoursInput = element(by.css('[formcontrolname=standardHours]'));
    annualizedPayInput = element(by.css('[formcontrolname=annualizedPay]'));
    defaultHoursInput = element(by.css('[formcontrolname=defaultHours]'));
    reasonCodePayDropdown = element(by.id('reasonCodes'));
    firstReasonCodePayOption = element(by.css('[id=reasonCodes] + div button:first-of-type'));
    effectiveDate = element(by.css('[formcontrolname=effDate]'));
    payMethod = element(by.id('asoPayMethod'));
    firstPayMethodOption = element(by.css('[id=asoPayMethod] + div button:first-of-type'));
    confirmPayRate = element(by.buttonText('Confirm'));

    //Change supervisor fields
    changeSupervisorBtn = element(by.css('.dx-popup-content div.dx-list-group:nth-of-type(2) [role=option]:nth-of-type(4)'));
    supervisorDropDown = element(by.css('[id*=supervisor]'));
    firstSupervisorOption = element(by.css('[data-bind] [role="option"]:nth-of-type(1)'));  
    lastPerformanceReview = element(by.css('.dx-box .dx-box-item:nth-of-type(2) input'));
    nextPerformanceReview = element(by.css('.dx-box .dx-box-item:nth-of-type(3) input'));
    nextPayReview = element(by.css('.dx-box .dx-box-item:nth-of-type(4) input'));
    confirmSupervisorChange = element(by.buttonText('Confirm'));
    
    //Validate all action links are clickable
    allEmployeeOptions = element.all(by.css('[role=option]'));

    
    
    //Action methods. These take parameters from the spec files.
    navigateTo() {
        return browser.get('/client/employees/employeeSearch');
    }

    getUserName() {
        var until = protractor.ExpectedConditions;
        browser.wait(until.visibilityOf(this.firstUserName), 30000, 'Employee list is not found, or is taking 30+ seconds to load.');
        return this.firstUserName.getText();
    }

    clickActions() {
        var until = protractor.ExpectedConditions;
        browser.wait(until.visibilityOf(this.firstUserName), 30000, 'Employee list is not found, or is taking 30+ seconds to load.');
        this.actions.click();
        //test the width of the Actions dropdown

        this.open.getSize().then(function(eleSize){
            console.log(eleSize.width); //eleSize is the element's size object
            expect(eleSize.width).toBeGreaterThan(200);
        });
    }

    clickOpen() {
        this.open.click();
    }

    getProfileUserName() {
        var until = protractor.ExpectedConditions;
        browser.wait(until.visibilityOf(this.profileUserName), 5000, 'Element taking too long to appear in the DOM!!!');
        return this.profileUserName.getText();
    }

    //should be done when already on the User Profile
    editDetails(phoneNumber) {
        var until = protractor.ExpectedConditions;
        this.editIcon.click();
        browser.sleep(3000);
        this.primaryPhone.clear();
        this.primaryPhone.sendKeys(phoneNumber);
        browser.wait(until.elementToBeClickable(this.saveChanges), 5000, 'Save is not clickable after editing a field');
        this.saveChanges.click();
    }



    terminateEmployee(termDate) {
        var until = protractor.ExpectedConditions;
        browser.wait(until.visibilityOf(this.actions), 15000, 'No employees found, or taking too long to load')
        this.actions.click();
        this.terminationBtn.click();
        this.voluntaryRadioBtn.click();
        this.statusCodeDropdown.click();
        browser.wait(until.visibilityOf(this.firstStatusCodeOption), 5000, 'no options found in Status Code dropdown');
        this.firstStatusCodeOption.click();
        this.reasonCodeDropdown.click();
        browser.wait(until.visibilityOf(this.firstReasonCodeOption), 5000, 'no options found in Reason Code dropdown');
        this.firstReasonCodeOption.click();
        this.terminationDateInput.clear();
        this.terminationDateInput.sendKeys(termDate);
        this.rehireYes.click();
        this.achTurnOffYes.click();
        this.confirm.click();
    }

    changePayRate(payRateIn, standardHoursIn, annualizedPayIn, defaultHoursIn, effectiveDateIn) {
        var until = protractor.ExpectedConditions;
        browser.wait(until.visibilityOf(this.actions), 15000, 'No employees found, or taking too long to load');
        //this.actions.click();
        this.payRateBtn.click();
        browser.wait(until.visibilityOf(this.payEditIcon), 5000, 'pay Edit icon cannot be found on screen');
        this.payEditIcon.click();
        this.payRateInput.clear();
        this.payRateInput.sendKeys(payRateIn);
        this.perPayRateDropdown.click();
        browser.wait(until.visibilityOf(this.firstPayRateOption), 5000, 'no dropdown options found for Pay Rate (Year, Hourly, etc.)');
        this.firstPayRateOption.click();
        this.standardHoursInput.clear();
        this.standardHoursInput.sendKeys(standardHoursIn);
        this.annualizedPayInput.clear();
        this.annualizedPayInput.sendKeys(annualizedPayIn);
        this.defaultHoursInput.clear();
        this.defaultHoursInput.sendKeys(defaultHoursIn);
        this.effectiveDate.clear();
        this.effectiveDate.sendKeys(effectiveDateIn);
        this.payMethod.click();
        browser.wait(until.visibilityOf(this.firstPayMethodOption), 5000, 'no dropdown options found for Pay Method');
        this.firstPayMethodOption.click();
        browser.wait(until.elementToBeClickable(this.confirmPayRate), 5000, 'Unable to confirm pay rate change. Something is missing');
        this.confirmPayRate.click();
    }

    changeSupervisor(lastReviewIn, nextReviewIn, nextPayReviewIn,) {
        var until = protractor.ExpectedConditions;
        browser.wait(until.visibilityOf(this.actions), 15000, 'No employees found, or taking too long to load');
        this.actions.click();
        this.changeSupervisorBtn.click();
        this.supervisorDropDown.click();
        browser.wait(until.visibilityOf(this.firstSupervisorOption), 5000, 'no options found for supervisor change dropdown');
        this.firstSupervisorOption.click();
        this.lastPerformanceReview.clear()
        this.lastPerformanceReview.sendKeys(lastReviewIn);
        this.nextPerformanceReview.clear()
        this.nextPerformanceReview.sendKeys(nextReviewIn);
        this.nextPayReview.clear()
        this.nextPayReview.sendKeys(nextPayReviewIn);
        this.confirmSupervisorChange.click();
    }

    testAllOptionsClickable(){
        //this.actions.click();
        browser.sleep(3000);
        this.allEmployeeOptions.each(function(elm){
        expect(elm.isDisplayed).toBeTruthy();
        expect(elm.isEnabled).toBeTruthy();
        });
        
    }
}