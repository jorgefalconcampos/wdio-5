class HomePage {


  public get feedbackLink() {
    return $("#feedback");
  }

  public async visit() {
    await browser.url("http://zero.webappsecurity.com/index.html");
  }


  public async clickOnFeedbackLink() {
    await (await this.feedbackLink).click();
  }
}

export default new HomePage();
