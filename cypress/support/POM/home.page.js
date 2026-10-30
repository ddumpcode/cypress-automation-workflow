class HomePage {
  productCardTitle = ".card-title";
  productDetailContainer = ".product-deatil"; // typo bawaan dari demoblaze
  mainContainer = "#contcont";

  verifyHomePageLoaded() {
    cy.get(this.mainContainer).should("be.visible");
  }

  clickProduct(productName) {
    cy.get(this.productCardTitle).contains("a", productName).click();
  }

  verifyProductDetailIsVisible() {
    cy.get(this.productDetailContainer).should("be.visible");
  }
}

export default HomePage;
