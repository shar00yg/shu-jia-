 const http = require('http');
 const url =require('url');
 const fs =require('fs');
// const surl =new URL('https://www.shiguangkey.com/video/1346?videoId=65770&classId=4228&playback=1');
// console.log(surl);


let server = http.createServer((request,response)=>{
    //console.log(request.url);
    let{pathname,query} = url.parse(request.url,true);
    if(pathname==='/index.html'){
        fs.readFile('.'+pathname,(err,data)=>{
            if(err){
                response.end('no such file');
            }else{
                response.setHeader('content-type','text/html;charset=utf-8')
                response.end(data);
            }
        })
    }
    //console.log(pathname,query);
    //response.end();
    //设置响应的头部信息
    // response.setHeader('content-type','text/html;charset=utf-8');
    // response.write('<h1>我是首页</h1>');
    // response.end();
});

//监听端口
server.listen(4000);
// debugger
// db.close;