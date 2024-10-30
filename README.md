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
import { defineConfig } from "cypress";
import addAccessibilityTasks from 'wick-a11y/accessibility-tasks';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addAccessibilityTasks(on);
    },
  },
  accessibilityFolder: 'cypress/a11y-reports',
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

Example of running against only the wcag2.2aa rules.
```
cy.checkAccessibility(null, {
      runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2a', 'wcag22aa']
    });
```

## :link: Links  
[https://github.com/sclavijosuero/wick-a11y](https://github.com/sclavijosuero/wick-a11y)
