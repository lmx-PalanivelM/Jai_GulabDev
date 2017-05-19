import { SencogoldPage } from './app.po';

describe('sencogold App', () => {
  let page: SencogoldPage;

  beforeEach(() => {
    page = new SencogoldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
