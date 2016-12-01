import { browser, element, by } from 'protractor';

export class FamilyClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tnqsoft-root h1')).getText();
  }
}
