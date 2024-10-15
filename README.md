# Wick A11y
An example project showing how to setup wick-a11y

## :memo: Prerequisites  
Cypress to be installed and configured.  

## :building_construction: Setup
Install the Wick-A11y plugin.  
```
npm install wick-a11y --save-dev
```

Add the following into the ```cypress.config.js``` file.
```javascript
const { defineConfig } = require("cypress");

// Import the accessibility tasks from wick-a11y plugin
const addAccessibilityTasks = require('wick-a11y/accessibility-tasks');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add accessibility tasks
      addAccessibilityTasks(on);
    },
    
    // ... rest of the configuration
  },
});
```

Add the following line to ```cypress/support/e2e.js```.
```javascript
import 'wick-a11y';
```

Configure the reports folder path (if different to the default) in the ```cypress.config.js``` file.
```javascript
module.exports = defineConfig({
  // [...]
  accessibilityFolder: 'cypress/your-accessibility-reports-folder',
  // [...]
});
```

Add ```cy.chackAccessibillity();``` to your spec files;
```
describe('Accessibility Test', () => {
  beforeEach(() => {
    cy.visit('http://example.com');
  });

  it('should check accessibility of the page', { defaultCommandTimeout: 15000 }, () => {
    cy.checkAccessibility();
  });
});
```

## :link: Links  
[https://github.com/sclavijosuero/wick-a11y](https://github.com/sclavijosuero/wick-a11y)
