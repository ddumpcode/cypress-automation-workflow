import NavbarPage from "../../support/POM/navbar.page";
import HomePage from "../../support/POM/home.page";
import FooterPage from "../../support/POM/footer.page";
import CartPage from "../../support/POM/cart.page";
import ContactModalPage from "../../support/POM/contactModal.page";
import AboutUsModalPage from "../../support/POM/aboutUsModal.page";
import LoginModalPage from "../../support/POM/loginModal.page";
import SignUpModalPage from "../../support/POM/signUpModal.page";

describe("Module Navigation and Footer Testing", () => {
  const navbar = new NavbarPage();
  const homePage = new HomePage();
  const footer = new FooterPage();
  const cartPage = new CartPage();

  // Modals
  const contactModal = new ContactModalPage();
  const aboutUsModal = new AboutUsModalPage();
  const loginModal = new LoginModalPage();
  const signUpModal = new SignUpModalPage();

  beforeEach(() => {
    cy.visit(Cypress.expose("staging_url"));
  });

  context("Global Navigation Visibility", () => {
    it("should show navigation bar across different pages", () => {
      navbar.verifyNavigationBar();

      homePage.clickProduct("Samsung galaxy s6");
      navbar.verifyNavigationBar();
    });
  });

  context("Navbar Routing & Link Behaviors", () => {
    it("should navigate to the correct section and display the target modals/pages", () => {
      // home
      navbar.clickHomeMenu();
      homePage.verifyHomePageLoaded();

      // contact
      navbar.clickContactUsButton();
      contactModal.verifyModalIsVisible();
      cy.wait(500);
      contactModal.clickCloseButton();
      contactModal.verifyModalIsClosed();

      // about Us
      navbar.clickAboutUsButton();
      aboutUsModal.verifyModalIsVisible();
      cy.wait(500);
      aboutUsModal.clickCloseButton();
      aboutUsModal.verifyModalIsClosed();

      // cart
      navbar.clickCartMenu();
      cartPage.verifyCartPageLoaded();

      // log in
      navbar.clickLoginMenu();
      loginModal.verifyModalVisible();
      cy.wait(500);
      loginModal.clickCloseButton();
      loginModal.verifyModalClosed();

      // sign up
      navbar.clickSignUpMenu();
      signUpModal.verifyModalVisible();
      cy.wait(500);
      signUpModal.clickCloseButton();
      signUpModal.verifyModalClosed();
    });
  });

  context("Global Footer Consistency", () => {
    it("should display correct footer information on Home and Cart pages", () => {
      footer.verifyFooterVisible();
      footer.verifyFooterContent();

      navbar.clickCartMenu();
      cartPage.verifyCartPageLoaded();

      footer.verifyFooterVisible();
      footer.verifyFooterContent();
    });
  });
});
