module.exports = {
  server: {
    command: 'yarn start',
    port: 8000
  },
  launchBrowserApp: {
    headless: true
  },
  browsers: ['chromium', 'firefox', 'webkit']
};
