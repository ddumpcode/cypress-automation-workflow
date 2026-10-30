import AboutUsModalPage from "../../support/POM/aboutUsModal.page";
import HomePage from "../../support/POM/home.page";

describe("Users can access information about the company or platform (About Us) at any time and close it again without interruption.", () => {
  const aboutUsModal = new AboutUsModalPage();
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit(Cypress.expose("staging_url"));
  });

  context("Modal UI Interactions", () => {
    it("should showing modal about us and company video", () => {
      cy.openAboutUsPage();
      aboutUsModal.verifyModalIsVisible();
    });

    it("should close the modal when close button is clicked", () => {
      cy.openAboutUsPage();
      aboutUsModal.verifyModalIsVisible();

      cy.wait(500);
      aboutUsModal.clickCloseButton();
      aboutUsModal.verifyModalIsClosed();
    });
  });

  context("Video Player Functionality", () => {
    it("should test video player controls (Play, Pause, Mute, Skip)", () => {
      cy.openAboutUsPage();
      aboutUsModal.verifyModalIsVisible();

      cy.wait(500);
      aboutUsModal.testVideoControls();
    });
  });

  context("Post-Modal Exploration", () => {
    it("allow user to continue exploring the website after closed the modal", () => {
      cy.openAboutUsPage();
      aboutUsModal.verifyModalIsVisible();

      cy.wait(500);
      aboutUsModal.clickCloseButton();
      aboutUsModal.verifyModalIsClosed();

      homePage.clickProduct("Samsung galaxy s6");
      homePage.verifyProductDetailIsVisible();
    });
  });
});
