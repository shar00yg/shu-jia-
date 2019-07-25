const http = require('http');
const url =require('url');
const fs =require('fs');


let server = http.createServer((request,response)=>{
    console.log(request.url);
    let{pathname,query} = url.parse(request.url,true);
    if(pathname==='/a/b/c'){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                response.end('no such file');
            }else{
                response.setHeader('content-type','text/html;charset=utf-8')
                response.end(data);
            }
        })
    }
});

server.listen(5000);