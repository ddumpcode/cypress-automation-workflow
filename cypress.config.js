const { defineConfig } = require("cypress");

module.exports = defineConfig({
  expose: {
    staging_url: "https://www.demoblaze.com/index.html",
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/result",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      if (process.env.staging_url) {
        config.baseUrl = process.env.staging_url;
      }
      return config;
    },
  },
});
