import ContactModalPage from "../../support/POM/contactModal.page";
import dataUser from "../../fixtures/user.json";

describe("Users can send messages via the Contact form by entering valid data and receiving a confirmation that their message has been sent.", () => {
  const contactModal = new ContactModalPage();

  beforeEach(() => {
    cy.visit(Cypress.expose("staging_url"));

    cy.window().then((win) => {
      cy.stub(win, "alert").as("windowAlert");
    });
  });

  context("Modal ui interaction", () => {
    it("should showing modal form contact", () => {
      cy.openContactPage();
      contactModal.verifyModalIsVisible();
    });

    it("should close modal when close button is clicked", () => {
      cy.openContactPage();
      contactModal.verifyModalIsVisible();
      cy.wait(500);
      contactModal.clickCloseButton();
      contactModal.verifyModalIsClosed();
    });
  });

  context("Form validation (negative cases)", () => {
    beforeEach(() => {
      cy.openContactPage();
      contactModal.verifyModalIsVisible();
    });

    it("should show error messaage when inputting an invalid email format", () => {
      const invalidEmail = dataUser.invalidUser.email;
      const invalidName = dataUser.invalidUser.username;
      const message = dataUser.message;
      contactModal.fillForm(invalidEmail, invalidName, message);
      contactModal.clickSendMessage();
      contactModal.verifyModalIsVisible();
      contactModal.verifyErrorMessageIsVisible();
      cy.get("@windowAlert").should("not.have.been.called");
    });

    it("should show error when one of the input fields is empty", () => {
      const validName = dataUser.validUser.username;
      const message = dataUser.message;
      contactModal.fillForm(validName, message);
      contactModal.clickSendMessage();
      contactModal.verifyModalIsVisible();
      contactModal.verifyErrorMessageIsVisible();
      cy.get("@windowAlert").should("not.have.been.called");
    });

    it("should show error when all input fields are empty", () => {
      contactModal.clickSendMessage();
      contactModal.verifyModalIsVisible();
      contactModal.verifyErrorMessageIsVisible();
      cy.get("@windowAlert").should("not.have.been.called");
    });
  });

  context("Happy path (positive cases)", () => {
    beforeEach(() => {
      cy.openContactPage();
      contactModal.verifyModalIsVisible();
    });

    it("should send message successfully when all input fields are filled with valid data", () => {
      const validEmail = dataUser.validUser.email;
      const validName = dataUser.validUser.username;
      const message = dataUser.message;
      contactModal.fillForm(validEmail, validName, message);
      contactModal.clickSendMessage();
      cy.get("@windowAlert").should(
        "have.been.calledWith",
        "Thanks for the message!!",
      );
    });
  });
});
