/*
* Create and export configuration variables
*
*/

// Container for all the environments
var environments = {};

// Staging (default) environment
environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging",
  hashingSecret: "thisIsASecret",
  maxChecks: 5,
  twilio: {
    accountSid: "AC3edad4ebb782d64d78634233d93744ef",
    authToken: "39ea03d395da86b9f7fc16d21540a489",
    fromPhone: "whatsapp:+14155238886"
  }
};

// Production environment
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production",
  hashingSecret: "thisIsAlsoASecret",
  maxChecks: 5,
  twilio: {
    accountSid: "",
    authToken: "",
    fromPhone: ""
  }
};

// Determine which environment was passed as a comman-line arguement
var currentEnvironment =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";

// Check that the current environment is one of the above, if not, default to satging
var environmentToExport =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.staging;

// Export the module
module.exports = environmentToExport;
