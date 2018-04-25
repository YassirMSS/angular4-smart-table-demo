import { browser, by, element } from 'protractor';

export class DemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getDemoTagName() {
    return element(by.css('app-root data-table-demo-1')).getTagName();
  }
}
