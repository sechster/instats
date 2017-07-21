import { InstatsPage } from './app.po';

describe('instats App', function() {
  let page: InstatsPage;

  beforeEach(() => {
    page = new InstatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
