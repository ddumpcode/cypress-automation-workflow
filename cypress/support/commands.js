import NavbarPage from "./POM/navbar.page";

const navbarPage = new NavbarPage();

// open navbar and click contact link
Cypress.Commands.add("openContactPage", () => {
  navbarPage.verifyNavigationBar();
  navbarPage.clickContactUsButton();
});

Cypress.Commands.add("openAboutUsPage", () => {
  navbarPage.verifyNavigationBar();
  navbarPage.clickAboutUsButton();
});
