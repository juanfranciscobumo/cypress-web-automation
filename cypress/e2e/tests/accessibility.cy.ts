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

  it("Error messages should have proper ARIA attributes", () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("have.attr", "aria-hidden", "false");
  });

  it("All images should have alt text", () => {
    cy.get("img").each(($img) => {
      cy.wrap($img).should("have.attr", "alt");
    });
  });

  it("Form inputs should have labels", () => {
    cy.get("input").each(($input) => {
      const id = $input.attr("id");
      if (id) {
        cy.get(`label[for="${id}"]`).should("exist");
      }
    });
  });
});
