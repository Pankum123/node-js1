const http = require('http');

// function dataControl(req,resp)
// {
//     resp.write("<h1>Hello ji kaise ho </h1>")
//     resp.end();
// }
// http.createServer(dataControl).listen(4600);

// const dataControl = (req,resp) =>
// {
//     resp.write("<h1>Hello ji kaiso ram jane </h1>")
//     resp.end();
// }
// http.createServer(dataControl).listen(4600);

http.createServer((req,resp)=>{
    resp.write("<h1>Hello this a pankaj</h1>")
    resp.write("i am indian ")
    resp.end();
}).listen(4600);
   