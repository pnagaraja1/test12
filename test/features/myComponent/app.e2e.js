describe('app', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should have items listed', function () {
    expect(element(by.css('#unorderedList')).isPresent()).toEqual(true);
  });
});
