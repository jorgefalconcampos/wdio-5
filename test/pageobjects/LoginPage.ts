import AbstractPage from "./AbstractPage";

class LoginPage extends AbstractPage {
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
}

export default new LoginPage();
