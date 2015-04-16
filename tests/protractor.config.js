exports.config = {
  capabilities: {
    // You can use other browsers
    // like firefox, phantoms, safari, IE (-_-)
    'browserName': 'chrome' 
  },
  specs: [
    '**/e2e/*spec.js'
  ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
  },
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:8100'
};

