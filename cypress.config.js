const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl:'https://candidatex:qa-is-cool@qa-task.backbasecloud.com',
    "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports/mochawesome",
    "overwrite": false,
    "html": false,
    "json": true
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
