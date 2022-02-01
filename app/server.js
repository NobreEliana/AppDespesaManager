const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
app.listen(8080, () => {
  console.log('DespesaManager APP is running in port 8080');
  });