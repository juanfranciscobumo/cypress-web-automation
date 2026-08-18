import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: 10000,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  env: {
    allure: true,
    allureLogAsserts: true,
  },
});
