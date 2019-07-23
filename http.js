// const http = require('http');
// const surl =new URL('https://www.shiguangkey.com/video/1346?videoId=65770&classId=4228&playback=1');
// console.log(surl);


let server = http.createServer((request,response)=>{
    console.log(request.url);
    response.write('heloo world');
    response.end();
})

debugger
db.close;