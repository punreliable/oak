describe("Footer", () => {
  it("displays the current year", () => {
    cy.visit("/"); // Replace with the URL of your application

    cy.get(".readTheDocs").should("contain", new Date().getFullYear());
  });
});