/// <reference types="cypress" />

describe("password app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("input password", () => {
    cy.get("#first-password").type("Test123");
    cy.get("#second-password").type("Test123");
  });
});
