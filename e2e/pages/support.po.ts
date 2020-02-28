import { browser, by, element, Key } from 'protractor';

export class SupportPage {

    //Input elements
    createTicketBtn = element(by.buttonText('Create Ticket'));
    subjectField = element(by.css('textarea[formcontrolname="subject"]'));
    categoryDropdown = element(by.css('button#supportCategory>span>i'));
    firstCategoryBtn = element(by.css('button#supportCategory+div>button:nth-of-type(1)'));
    typeDropdown = element(by.css('button#supportType>span>i'));
    firstTypeBtn = element(by.css('button#supportType+div>button:nth-of-type(1)'));
    priorityDropdown = element(by.css('button#supportPriority>span>i'));
    firstPriorityBtn = element(by.css('button#supportPriority+div>button:nth-of-type(1)'));
    modalNextBtn = element(by.buttonText('Next'));
    detailsField = element(by.css('textarea[formcontrolname="detail"]'));
    submitBtn = element(by.buttonText('Submit'));

    //Validation elements
    ticketStatus = element(by.css('li.list-item:nth-of-type(1) >div.row>div:nth-of-type(2) span'));
    ticketSubject = element(by.css('li.list-item:nth-of-type(1) >div.row>div:nth-of-type(3) span'));
    openTicketModalBtn = element(by.css('ul>li:nth-of-type(1) button'));
    modalTicketSubject = element(by.css('app-support-open-ticket p'));

    //Action methods. These take parameters from the spec files.
    navigateTo() {
        return browser.get('/client/support');
    }

    clickCreateTicket() {
        this.createTicketBtn.click();
    }

    setSubject(testSubjectText) {
        this.subjectField.clear();
        this.subjectField.sendKeys(testSubjectText);
    }

    setCategory() {
        this.categoryDropdown.click();
        //var categoryText = this.firstCategoryBtn.getText().then(function(text) {
        //    return text;
        //});
        this.firstCategoryBtn.click();
        //return categoryText;
    }

    setType() {
        this.typeDropdown.click();
        this.firstTypeBtn.click();
    }

    setPriority() {
        this.priorityDropdown.click();
        this.firstPriorityBtn.click();
    }

    setDetails(details) {
        this.modalNextBtn.click();
        this.detailsField.clear();
        this.detailsField.sendKeys(details);
        this.submitBtn.click();
    }

    openTicketModal() {
        this.openTicketModalBtn.click();
    }

    getStatusText() {
        return this.ticketStatus.getText();
    }
    getSubjectText() {
        return this.ticketSubject.getText();
    }
    getModalSubjectText() {
        return this.modalTicketSubject.getText();
    }
}