class NavbarPage {
  navigationBar = "#navbarExample";

  verifyNavigationBar() {
    cy.get(this.navigationBar).should("be.visible");
  }

  clickContactUsButton() {
    cy.get(this.navigationBar).contains("a.nav-link", "Contact").click();
  }

  clickAboutUsButton() {
    cy.get(this.navigationBar).contains("a.nav-link", "About us").click();
  }

  clickHomeMenu() {
    cy.get(this.navigationBar).contains("a.nav-link", "Home").click();
  }

  clickCartMenu() {
    cy.get(this.navigationBar).contains("a.nav-link", "Cart").click();
  }

  clickLoginMenu() {
    cy.get(this.navigationBar).contains("a.nav-link", "Log in").click();
  }

  clickSignUpMenu() {
    cy.get(this.navigationBar).contains("a.nav-link", "Sign up").click();
  }
}

export default NavbarPage;
