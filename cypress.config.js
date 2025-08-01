const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "198o7i",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
