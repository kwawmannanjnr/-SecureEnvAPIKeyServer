const express = require('express');
const app = express();
const PORT = 3001; // Choose any available port


//Define you Environment Variable
let environmentVariableName = "MY_VARIABLE"; // The name of the environment variable you want to access
let environmentVariableValue = process.env[environmentVariableName];
console.log(environmentVariableValue); // This will print the value of MY_VARIABLE


// Determine the source of the API key
let apiKeySource;
let apiKey;

// Define your API key in Your System Environment Variable and access the variable here.
//Not Defining your key in the environment variable will return a undefined when the server is run.
if (process.argv.length > 2) {
    apiKey = process.argv[2];
    apiKeySource = 'Command Line Argument';
} else if (environmentVariableValue) {
    apiKey = environmentVariableValue;
    apiKeySource = 'Environment Variable';
} else {
    apiKeySource = 'Not Provided';
}

console.log(`API Key: ${apiKey} (Source: ${apiKeySource})`);

// Define your API endpoints
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to SecureEnvAPIKeyServer-PreventsKeyExposure!' });
});

app.get('/api/apikey', (req, res) => {
    // Exposing your API key like this can be dangerous. Be cautious.
    res.json({ message: 'Welcome to SecureEnvAPIKeyServer-PreventsKeyExposure!', apiKey, apiKeySource });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
