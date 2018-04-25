import { DemoPage } from './app.po';

describe('Angular4-Smart-Table Demo App', () => {
  let page: DemoPage;

  beforeEach(() => {
    page = new DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular4-Smart-Table Demo');
  });

  it('should display table tag', () => {
    page.navigateTo();
    expect(page.getDemoTagName()).toEqual('data-table-demo-1');
  })
});


