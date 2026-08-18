import "./commands";
import allureWriter from "@shelex/cypress-allure-plugin";

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

allureWriter(Cypress, {
  targetFolder: "allure-results",
});
