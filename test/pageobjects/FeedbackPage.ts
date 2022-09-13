class FeedbackPage {
  public get nameInput() {
    return $("#name");
  }
  public get emailInput() {
    return $("#email");
  }
  public get subjectInput() {
    return $("#subject");
  }
  public get messageInput() {
    return $("#comment");
  }
  public get submitButton() {
    return $("input[type='submit']");
  }

  public async submitFeedback(name: string, email:string, subject: string, message: string) {
    await (await this.nameInput).setValue(name)
    await (await this.emailInput).setValue(email)
    await (await this.subjectInput).setValue(subject)
    await (await this.messageInput).setValue(message)
  }
}

export default new FeedbackPage();
