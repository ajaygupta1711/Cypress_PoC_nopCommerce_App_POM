const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    specPattern: 'cypress/Integration/e2e tests/POC_nopCommerce.spec.js',
  },
});

const fs = require('fs')
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })

      on('task', {
        lighthouse: lighthouse((lighthouseReport) => {
          const reportHtml = lighthouseReport.report;
          fs.writeFileSync('cypress/reports/html/LHReport.html', reportHtml);
        }),
      })
    },
    specPattern: 'cypress/Integration/e2e tests/POC_nopCommerce.cy.js'
  },
})


/* const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = {
e2e: {
//baseUrl: "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F",
setupNodeEvents(on, config) {
on("before:browser:launch", (browser = {}, launchOptions) => {
prepareAudit(launchOptions);
});
on("task", {
lighthouse: lighthouse(),
});
},
specPattern:'cypress/Integration/e2e tests/POC_nopCommerce.cy.js'
},
}; */
