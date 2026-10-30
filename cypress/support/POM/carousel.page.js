class CarouselPage {
  container = "#carouselExampleIndicators";
  item = ".carousel-item";
  nextButton = ".carousel-control-next";
  prevButton = ".carousel-control-prev";

  verifyCarouselVisible() {
    cy.get(this.container).should("be.visible");
  }

  verifyItemIsActive(index) {
    cy.get(this.item).eq(index).should("have.class", "active");
  }

  verifyItemIsNotActive(index) {
    cy.get(this.item).eq(index).should("not.have.class", "active");
  }

  clickNext() {
    cy.get(this.nextButton).click();
  }

  clickPrev() {
    cy.get(this.prevButton).click();
  }

  rapidClickNext() {
    cy.get(this.nextButton).click().click().click().click().click();
  }

  waitForAutoSlide() {
    cy.wait(5500);
  }

  verifyPageNotScrolled() {
    cy.window().its("scrollY").should("equal", 0);
  }
}

export default CarouselPage;
