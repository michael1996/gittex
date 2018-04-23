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

application.get('/hello',(req,res,next) =>{
    res.status(200).json({
        'msg':'Hello JEDI\'s'
    })
});
module.exports = application;