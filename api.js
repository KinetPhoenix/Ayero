const restify = require('restify');

function commandUsed(req, res, next) {
  const user = req.params.user
    res.send(JSON.stringify({
        user: user
    }))
  next();
}

const server = restify.createServer();
server.post('/commands/:user', commandUsed);
server.get('/', function(req, res, next) {
    res.send("Hello");
    next();
})

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});