import { NodeRiversPage } from './app.po';

describe('node-rivers App', () => {
  let page: NodeRiversPage;

  beforeEach(() => {
    page = new NodeRiversPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
