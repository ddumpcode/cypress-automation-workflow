class LoginModalPage {
  modalContainer = "#logInModal";
  closeButton = "#logInModal .close";

  verifyModalVisible() {
    cy.get(this.modalContainer).should("be.visible");
    cy.contains(this.modalContainer, "Log in").should("be.visible");
  }

  verifyModalClosed() {
    cy.get(this.modalContainer).should("not.be.visible");
  }

  clickCloseButton() {
    cy.get(this.closeButton).click();
  }
}

export default LoginModalPage;
