class SignUpModalPage {
  modalContainer = "#signInModal";
  closeButton = "#signInModal .close";

  verifyModalVisible() {
    cy.get(this.modalContainer).should("be.visible");
    cy.contains(this.modalContainer, "Sign up").should("be.visible");
  }

  verifyModalClosed() {
    cy.get(this.modalContainer).should("not.be.visible");
  }

  clickCloseButton() {
    cy.get(this.closeButton).click();
  }
}

export default SignUpModalPage;
