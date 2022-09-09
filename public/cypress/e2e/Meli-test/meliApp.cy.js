describe("Meli challenge app", () => {
    it("frontpage can be opened", () => {
        cy.visit("http://localhost:5173");
        cy.get('input:first')
            .invoke("attr", "placeholder")
            .should("contain", "Nunca dejes de buscar");
    });

    it("user can search a product", () => {
        cy.get('input:first').type("iphone");
        cy.get('[data-test-id="search-button"').click();
    });

    it("user can see the results of his search", () => {
        cy.get('[data-test-id="product-list"');
        cy.get('[data-test-id="product-list-item"').should('have.length', 4);
    });

    it("user can select any results and view its description ", () => {
        cy.get('[data-test-id="product-list-item"').first().click();
    });
});
