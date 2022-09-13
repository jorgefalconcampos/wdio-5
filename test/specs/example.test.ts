import FeedbackPage from "../pageobjects/FeedbackPage";
import HomePage from "../pageobjects/HomePage";
import LoginPage from "../pageobjects/LoginPage";

describe("My first text with TS and Page Objects", () => {
  it("Should load homepage", async () => {
    await HomePage.visit();
    await browser.pause(1000);
    await HomePage.clickOnSignInButton();
    await browser.pause(1000);
    await LoginPage.assertLoginPageIsVisible();
    await LoginPage.doLogin("invalid-username", "invalid-password");
    await browser.pause(1000);
  });
});

describe.only("Feedback form Test", async () => {
  it("Should submit feedback form", async () => {
    await HomePage.visit();
    await HomePage.clickOnFeedbackLink();
    await FeedbackPage.submitFeedback("Jorge", "test@test.com", "test", "message")
  })
})
