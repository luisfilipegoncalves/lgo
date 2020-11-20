/// <reference types="cypress" />

context("Home Page", () => {
  it("Profile Information is visible", () => {
    cy.visit("/");
    cy.contains("Luís Filipe Gonçalves");
    cy.contains("Software Engineering Manager");
    cy.get("[data-cy=twitter]")
      .should("be.visible")
      .should("have.attr", "href")
      .and("include", "https://twitter.com/luisfigoncalves");

    cy.get("[data-cy=github]")
      .should("be.visible")
      .should("have.attr", "href")
      .and("include", "https://github.com/luisfilipegoncalves");

    cy.get("[data-cy=linkedin]")
      .should("be.visible")
      .should("have.attr", "href")
      .and("include", "https://www.linkedin.com/in/luisfigoncalves");

    cy.contains(/URL Decoder/i).click();
    cy.url().should("include", "/urldecoder");
    cy.go("back");

    cy.contains(/URL Encoder/i).click();
    cy.url().should("include", "/urlencoder");
    cy.go("back");

    cy.contains(/Prettier Formatter and Validator/i).click();
    cy.url().should("include", "/prettier");
    cy.go("back");
  });
});
