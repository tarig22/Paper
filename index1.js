var app = express();

app.get('/',function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
 })



 var server = app.listen(8080, function() {
     var host = server.address().address;
     var port = server.address().port;
     console.log('running !!..');
 }) 
 
