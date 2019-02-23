import { JungkookPage } from './app.po';

describe('jungkook App', function() {
  let page: JungkookPage;

  beforeEach(() => {
    page = new JungkookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
