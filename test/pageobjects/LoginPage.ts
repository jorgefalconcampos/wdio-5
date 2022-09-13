class LoginPage {
  // selectors
  public get loginForm() {
    return $("#login_form");
  }

  public get passwordInput() {
    return $("#user_password");
  }

  public get usernameInput() {
    return $("#user_login");
  }

  public get submitBtn() {
    return $("input[type='submit']");
  }

  public get errorMessage() {
    return $(".alert-error");
  }

  //   functions

  public async assertLoginPageIsVisible() {
    await this.loginForm.waitForDisplayed();
  }

  public async doLogin(username: string, password: string) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.submitBtn.click();
  }

  public async assertLoginPageErrorMessage() {
    await expect(this.errorMessage).toHaveTextContaining(
      "Login and/or password are wrong"
    );
  }

  // await browser.pause(1000);
  // await (await $("#user_login")).setValue("test");
  // await browser.pause(1000);
  // await (await $("#user_password")).setValue("test");
  // await browser.pause(1000);
  // await (await $("input[type='submit']")).click();
  // await browser.pause(1000);
  // const errMessage = await $(".alert-error");
  // await expect(errMessage).toHaveTextContaining(
  //   "Login and/or password are wrong."
  // );

  // functions
}

export default new LoginPage();
