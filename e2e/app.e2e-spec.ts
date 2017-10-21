import { MaterialBeginPage } from './app.po';

describe('material-begin App', () => {
  let page: MaterialBeginPage;

  beforeEach(() => {
    page = new MaterialBeginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
