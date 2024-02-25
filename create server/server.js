const http = require('http');
http.createServer((request, response)=>{
    response.write("Hello this is my first server creation")
    response.end()
}).listen(8080);

//in terminal write node .\server.js
// then go to web browser and type localhost:8080 to run the web page
