class ContactModalPage {
  modalContainer = "#exampleModal";
  emailField = "#recipient-email";
  nameField = "#recipient-name";
  messageField = "#message-text";
  footerContainer = ".modal-footer";
  errorText = "#errors";

  verifyModalIsVisible() {
    cy.get(this.modalContainer).should("be.visible");
  }

  verifyModalIsClosed() {
    cy.get(this.modalContainer).should("not.be.visible");
  }

  // Menggunakan percabangan (if) agar form bisa dites kosongan
  fillForm(email, username, message) {
    if (email) cy.get(this.emailField).type(email);
    if (username) cy.get(this.nameField).type(username);
    if (message) cy.get(this.messageField).type(message);
  }

  clickSendMessage() {
    cy.get(this.footerContainer).contains("button", "Send message").click();
  }

  verifyErrorMessageIsVisible() {
    cy.get(this.errorText).should("be.visible");
  }

  clickCloseButton() {
    cy.get(this.footerContainer).contains("button", "Close").click();
  }
}

export default ContactModalPage;
