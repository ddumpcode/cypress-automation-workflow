class FooterPage {
  footerContainer = "#fotcont";

  verifyFooterVisible() {
    cy.get(this.footerContainer).should("be.visible");
  }

  verifyFooterContent() {
    cy.get(this.footerContainer)
      .should("contain", "About Us")
      .and("contain", "Get in Touch");
  }
}

export default FooterPage;
