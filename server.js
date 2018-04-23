const express = require('express');

const application = express();
const port = 8080;

application.all('*', (request, response, next) =>{
   console.log(request.url);
   next();
});

application.listen(port, () => {
   console.log('The server started @ at port: ' + port);
});

module.exports = application;