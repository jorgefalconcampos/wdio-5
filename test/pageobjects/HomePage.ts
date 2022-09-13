class HomePage {
  public get signInButton() {
    return $("#signin_button");
  }

  public get feedbackLink() {
    return $("#feedback");
  }

  public async visit() {
    await browser.url("http://zero.webappsecurity.com/index.html");
  }

  public async clickOnSignInButton() {
    await (await this.signInButton).click();
  }

  public async clickOnFeedbackLink() {
    await (await this.feedbackLink).click();
  }
}

export default new HomePage();
