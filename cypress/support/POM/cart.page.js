class CartPage {
  pageTitle = "h2:contains('Products')";

  verifyCartPageLoaded() {
    cy.get(this.pageTitle).should("be.visible");
  }
}

export default CartPage;
