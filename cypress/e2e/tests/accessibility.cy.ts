import "cypress-axe";

describe("Accessibility Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login page should have no accessibility violations", () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Login page should have no critical violations", () => {
    cy.injectAxe();
    cy.checkA11y(null, {
      runOnly: {
        type: "tag",
        values: ["critical", "serious"],
      },
    });
  });

  it("Login form should be keyboard navigable", () => {
    cy.get('[data-test="username"]').focus();
    cy.focused().should("have.attr", "data-test", "username");
    cy.tab();
    cy.focused().should("have.attr", "data-test", "password");
    cy.tab();
    cy.focused().should("have.attr", "data-test", "login-button");
  });

  it("Error messages should be visible after failed login", () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Username is required");
  });

  it("All images should have alt text", () => {
    cy.get("img").each(($img) => {
      cy.wrap($img).should("have.attr", "alt");
    });
  });

  it("Page should have proper heading hierarchy", () => {
    cy.get("h1").should("have.length.at.most", 1);
  });

  it("Login inputs should have accessible names", () => {
    cy.get('[data-test="username"]').should("have.attr", "placeholder");
    cy.get('[data-test="password"]').should("have.attr", "placeholder");
  });
});
