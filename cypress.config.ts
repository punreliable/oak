import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


// from cypress set up guide
module.exports = {
  projectId: "iom9wj",
  // ...rest of the Cypress project config
}
