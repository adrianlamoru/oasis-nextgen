import { protractor, browser, by, element } from 'protractor';

export class LoginPage {

  signIn = element(by.buttonText('Sign in'));
  agreeTerms = element(by.buttonText('I Agree'));
  continue = element(by.buttonText('Continue'));

  //Action methods. These take parameters from the spec files.
  navigateTo() {
    return browser.get('/');
  }

  clickSignIn() {
    this.signIn.click();
  }

  clickAgreeSimple() {
    try {
      this.agreeTerms.click();
      this.continue.click();
    } catch (e) {
      console.log("not found");
    }
  }

  agreeIfPresent() {
    var until = protractor.ExpectedConditions;
    browser.wait(until.visibilityOf(this.agreeTerms), 5000, 'Element taking too long to appear in the DOM!!!')
      .then(() => {
        this.agreeTerms.click();
        this.continue.click();
      })
      .catch((error) => {
        console.log("not found");
      });
  }
}


