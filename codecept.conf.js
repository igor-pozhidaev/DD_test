exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://docdoc.ru/doctor',
      browser: 'chrome'
    }
  },
  include: {

  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'DD_test'
}
