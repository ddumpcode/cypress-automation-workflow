class CartPage {
  pageTitle = "#page-wrapper";

  verifyCartPageLoaded() {
    cy.get(this.pageTitle).contains("Products").should("be.visible");
  }
}

export default CartPage;
