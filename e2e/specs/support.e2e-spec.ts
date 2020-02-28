import { LoginPage } from '../pages/login.po';
import { SupportPage } from '../pages/support.po';
import { protractor, browser, by, element, until } from 'protractor';
import { doesNotReject } from 'assert';

describe('Support Workflow', () => {
    let page: LoginPage;
    let supportPage: SupportPage;
    browser.driver.manage().window().maximize();

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
        page.clickSignIn();
        //if the Terms and Conditions appear, agree to them.
        page.agreeIfPresent();
    });

    it('4: Should succeed submitting a Support ticket', () => {
        browser.ignoreSynchronization = true;
        supportPage = new SupportPage();
        supportPage.navigateTo();
        supportPage.clickCreateTicket();
        var testSubject = 'new test subject';
        var testDetails = 'test details'
        supportPage.setSubject(testSubject);
        supportPage.setCategory();
        supportPage.setType();
        supportPage.setPriority()
        supportPage.setDetails(testDetails);
        expect(supportPage.getStatusText()).toEqual('New');
        expect(supportPage.getSubjectText()).toEqual(testSubject);
        supportPage.openTicketModal()
        expect(supportPage.getModalSubjectText()).toEqual(testSubject);

        //testCategory.then((text) => {
        //    console.log(text);
        //   });
    });
});