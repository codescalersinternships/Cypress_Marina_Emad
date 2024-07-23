const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://www.saucedemo.com',
    pageLoadTimeout: 240000,
    experimentalSessionAndOrigin:true,
  },
});
