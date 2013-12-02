

var crossroads = require('crossroads'),
    http = require('http');

/*
http://examples.burningbird.net:8124/category/history 
http://examples.burningbird.net:8124/category/history/journal 
http://examples.burningbird.net:8124/category/history/journal/174
*/

crossroads.addRoute('/category/{type}/:pub:/:id:', function(type,pub,id) {

    console.log('route matched. type: ', type, '. pub:', pub, '. id: ', id);
});


http.createServer(function (req, res) {
   console.log(req.url);
   crossroads.parse(req.url); 
   res.end('done')
}).listen(8124);
    
