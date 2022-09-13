import NavBar from "../pageobjects/components/NavBar";
import FeedbackPage from "../pageobjects/FeedbackPage";
import HomePage from "../pageobjects/HomePage";
import LoginPage from "../pageobjects/LoginPage";

describe("My first text with TS and Page Objects", () => {
  it("Should load homepage", async () => {
    await HomePage.visit();

    await LoginPage.waitForSeconds(1);
    // await browser.pause(1000);
    await NavBar.clickOnSignInButton();
    await LoginPage.waitForSeconds(1);

    await LoginPage.assertLoginPageIsVisible();
    await LoginPage.doLogin("invalid-username", "invalid-password");
    await LoginPage.waitForSeconds(1);
  });
});

describe.only("Feedback form Test", async () => {
  it("Should submit feedback form", async () => {
    await HomePage.visit();
    await HomePage.clickOnFeedbackLink();
    await LoginPage.waitForSeconds(10);

    await FeedbackPage.submitFeedback(
      "Jorge",
      "test@test.com",
      "test",
      "message"
    );
    await LoginPage.waitForSeconds(1);
  });
});
