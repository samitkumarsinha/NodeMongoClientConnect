var http = require('http');
var port = process.env.PORT || 3000;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://unicorn1:unicorn1@cluster0.idow2.mongodb.net/samnode";
var result;
function getdata(res){
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sample_weatherdata");
    dbo.collection("data").find({}).limit(2).toArray(function(err, result) {
      if (err) throw err;
      res.end('hello world..' + result);
      result = result;
      db.close();
    });
  });
}

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    getdata(res);
}).listen(port);