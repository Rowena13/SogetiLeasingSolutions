import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    "baseUrl": "http://testobjectv2.westeurope.cloudapp.azure.com/"
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "charts": true,
    "overwrite": true,
    "html": false,
    "json": true,
    "reportDir": "cypress/reports/mochawesome-report"
  },
});