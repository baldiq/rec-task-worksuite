const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 45000,
    baseUrl: "https://autotest-recruitment.qa.shortlist.co"
  },
  env: {
    loginUrl: "/v/test-vendor-1/i/8z/762c64abf48540b686b12fa10048496f/",
    payment: "/payments/unpaid-work/"
  }
})