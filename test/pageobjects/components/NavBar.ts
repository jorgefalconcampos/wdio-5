import AbstractPage from "../AbstractPage";

class Navbar extends AbstractPage{
  public get signInButton() {
    return $("#signin_button");
  }
  public async clickOnSignInButton() {
    await (await this.signInButton).click();
  }
}

export default new Navbar();
