import { FamilyClientPage } from './app.po';

describe('family-client App', function() {
  let page: FamilyClientPage;

  beforeEach(() => {
    page = new FamilyClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tnqsoft works!');
  });
});
