/* global $ */

describe('Multibundle Example App', () => {
  it('should render an app', () => {
    const emptyHostText = $('~emptyHostText');
    emptyHostText.waitForDisplayed(10000);
    expect(emptyHostText.getText()).toBe('Host is empty');

    const tabApp0 = $('~tab_app0');
    tabApp0.click();

    const app0Text = $('~app0Text');
    app0Text.waitForDisplayed(10000);
    expect(app0Text.getText()).toBe('App 0');

    const tabApp1 = $('~tab_app1');
    tabApp1.click();

    const app1Text = $('~app1Text');
    app1Text.waitForDisplayed(10000);
    expect(app1Text.getText()).toBe('App 1');

    const asyncText = $('~asyncText');
    asyncText.waitForDisplayed(10000);
    expect(asyncText.getText()).toBe('Async');
  });
});
