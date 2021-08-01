// const express = require('express');
// const app = express();
// const path = require('path');
// const port = process.env.PORT || 4000;
// app.use(express.static(__dirname + '/dist'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });     
// app.listen(port, () => console.log(`listening on port:${port}`));

/**
 * 
 */

 const path = require('path');
 const express = require('express');
 const app = express();
 
 // Serve static files
 app.use(express.static(__dirname + '/dist/primates'));
 
 // Send all requests to index.html
 app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname + '/dist/primates/index.html'));
 });
 
 // default Heroku port
 app.listen(process.env.PORT || 5000);

