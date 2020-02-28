import { LoginPage } from '../pages/login.po';
import { EmployeePage } from '../pages/employee.po';
import { protractor, browser, by, element, until } from 'protractor';

describe('Regular Employee Workflow', () => {
    let page: LoginPage;
    let employeePage: EmployeePage;
    browser.driver.manage().window().maximize();

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
        page.clickSignIn();
        //if the Terms and Conditions appear, agree to them.
        page.agreeIfPresent();
    });

    it('5.1: Should successfully open an employee record and edit personal details', () => {
        employeePage = new EmployeePage();
        employeePage.navigateTo();
        browser.ignoreSynchronization = true;
        var firstEmployeeName = employeePage.getUserName().then(function (name) {
            console.log(name)
        });
        employeePage.clickActions();

        //tests if all options are displayed and enabled.
        //Expect function is in page object.
        employeePage.testAllOptionsClickable();
        employeePage.clickOpen();
        var secondEmployeeName = employeePage.getProfileUserName().then(function (name) {
            console.log(name)
        });

        //validate correct user profile is opened.
        expect(firstEmployeeName).toEqual(secondEmployeeName);

        //Edit phone number
        var newPhoneNumber = '1234567890';
        employeePage.editDetails(newPhoneNumber);

        //since # is not displayed as text(), get the attribute and validate it
        expect(employeePage.primaryPhone.getAttribute('ng-reflect-model')).toEqual(newPhoneNumber);

    });

    fit('5.2: Should successfully change an employee\'s Pay Rate, and change their Supervisor', () => {
        var payRate = '10';
        var standardHours = '45';
        var annualizedPay = '1000';
        var defaultHours = '50';
        var effectiveDate = 'October 1, 2018';
        var lastReview = 'July 1, 2018';
        var nextReview = 'July 1, 2019';
        var nextPayReview = 'January 1, 2019';
        employeePage = new EmployeePage();
        employeePage.navigateTo();
        browser.ignoreSynchronization = true;
        employeePage.clickActions();
        employeePage.changePayRate(payRate, standardHours, annualizedPay, defaultHours, effectiveDate);
        //TODO: validations when dummy data is replaced
        employeePage.changeSupervisor(lastReview, nextReview, nextPayReview);
        //TODO: validations when dummy data is replaced
    });

    it('5.3: Should successfully terminate the employee', () => {
        var terminationDate = 'July 30, 2018';
        employeePage = new EmployeePage();
        employeePage.navigateTo();
        browser.ignoreSynchronization = true;
        employeePage.terminateEmployee(terminationDate);
        browser.sleep(5000);
        //TODO: validations when dummy data is replaced
    });
});