/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Profile Information is visible", () => {
    cy.contains("Luís Filipe Gonçalves");
    cy.contains("Software Engineering Manager");
  });
});
