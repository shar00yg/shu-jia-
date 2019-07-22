// fs模块是nodejs中内置的一个核心模块
// file system 这个模块专门用来对系统文件的增删改查各种操作

const fs =require('fs');

//异步写入文件
fs.writeFile('./hello.txt',"hello node",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("数据写入成功");
        console.log(err);
    }
});


//同步的代买比异步的先执行
// console.log('我是同步的代码');


let result = fs.writeFileSync('./heaven.txt','我是 heaven');
console.log(result);
