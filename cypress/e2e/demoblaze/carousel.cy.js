import CarouselPage from "../../support/POM/carousel.page";
import HomePage from "../../support/POM/home.page";
import NavbarPage from "../../support/POM/navbar.page";

describe("Promotional elements on the homepage (carousel) display content automatically as well as through manual user controls, without displaying broken or empty content.", () => {
  const carousel = new CarouselPage();
  const homePage = new HomePage();
  const navbar = new NavbarPage();

  beforeEach(() => {
    cy.visit(Cypress.expose("staging_url"));
  });

  context("Auto Sliding Behavior", () => {
    it("carousel should slide automatically", () => {
      carousel.verifyCarouselVisible();

      carousel.verifyItemIsActive(0);
      carousel.waitForAutoSlide();

      carousel.verifyItemIsNotActive(0);
      carousel.verifyItemIsActive(1);
    });
  });

  context("Manual Sliding & Interaction", () => {
    it("carousel should slide manualy via next and prev buttons", () => {
      carousel.verifyCarouselVisible();
      carousel.verifyItemIsActive(0);

      // next
      carousel.clickNext();
      carousel.verifyItemIsNotActive(0);
      carousel.verifyItemIsActive(1);

      // prev
      carousel.clickPrev();
      carousel.verifyItemIsActive(0);
      carousel.verifyItemIsNotActive(1);
    });

    it("should not scroll the page down when carousel control is clicked rapidly", () => {
      carousel.verifyPageNotScrolled();

      carousel.rapidClickNext();
      cy.wait(500);

      carousel.verifyPageNotScrolled();
    });
  });

  context("State Preservation After Navigation", () => {
    it("should continue to auto-play normally when the user switches pages and comes back", () => {
      carousel.verifyCarouselVisible();

      homePage.clickProduct("Samsung galaxy s6");
      homePage.verifyProductDetailIsVisible();

      navbar.clickHomeMenu();

      carousel.verifyItemIsActive(0);
      carousel.waitForAutoSlide();

      carousel.verifyItemIsNotActive(0);
      carousel.verifyItemIsActive(1);
    });
  });
});
