import { TinyPage } from './app.po';

describe('tiny App', () => {
  let page: TinyPage;

  beforeEach(() => {
    page = new TinyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
