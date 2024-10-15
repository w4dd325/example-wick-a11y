const { defineConfig } = require("cypress");
const addAccessibilityTasks = require('wick-a11y/accessibility-tasks');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addAccessibilityTasks(on);
    },
  },
  accessibilityFolder: 'cypress/a11y-reports',
});
