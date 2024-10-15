import { defineConfig } from "cypress";
import addAccessibilityTasks from 'wick-a11y/accessibility-tasks';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addAccessibilityTasks(on);
    },
  },
  accessibilityFolder: 'cypress/a11y-reports',
});
