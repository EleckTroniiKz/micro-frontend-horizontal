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

  it("adds user, and deletes user from list", () => {
    cy.visit("http://localhost:3000/");
    cy.get("a:nth-child(3)").click();
    cy.get('[data-testid="name"]').click();
    cy.get('[data-testid="name"]').type("TestUserDelete");
    cy.get('[data-testid="gender"]').click();
    cy.get('[data-testid="gender"]').type("TestGenderDelete");
    cy.get('[data-testid="country"]').click();
    cy.get('[data-testid="country"]').type("TestCountryDelete");
    cy.get('[data-testid="height"]').click();
    cy.get('[data-testid="height"]').type("TestHeightDelete");
    cy.get('[data-testid="addUser"]').click();
    cy.reload();
    cy.contains("TestUserDelete").should("be.visible");
    cy.contains("TestGenderDelete").should("be.visible");
    cy.contains("TestCountryDelete").should("be.visible");
    cy.contains("TestHeightDelete").should("be.visible");

    // now delete that user

    const parent = cy.contains("td", "TestUserDelete").parent();
    const deleteButton = parent.find("button").contains("Delete");
    deleteButton.click();
    cy.contains("td", "TestUserDelete").should("not.exist");
    cy.contains("td", "TestGenderDelete").should("not.exist");
    cy.contains("td", "TestCountryDelete").should("not.exist");
    cy.contains("td", "TestHeightDelete").should("not.exist");
  });
});
