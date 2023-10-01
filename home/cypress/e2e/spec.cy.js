describe("E2E Tests for the home application", () => {
  it("adds User to list, after adding a User in the UserDetailsEdit App", () => {
    cy.visit("http://localhost:3000/");
    cy.get("a:nth-child(3)").click();
    cy.get('[data-testid="name"]').click();
    cy.get('[data-testid="name"]').type("TestUser");
    cy.get('[data-testid="gender"]').click();
    cy.get('[data-testid="gender"]').type("TestGender");
    cy.get('[data-testid="country"]').click();
    cy.get('[data-testid="country"]').type("TestCountry");
    cy.get('[data-testid="height"]').click();
    cy.get('[data-testid="height"]').type("TestHeight");
    cy.get('[data-testid="addUser"]').click();
    cy.reload();
    cy.contains("TestUser").should("be.visible");
    cy.contains("TestGender").should("be.visible");
    cy.contains("TestCountry").should("be.visible");
    cy.contains("TestHeight").should("be.visible");
  });
});
