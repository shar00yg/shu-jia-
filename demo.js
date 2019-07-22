// fs模块是nodejs中内置的一个核心模块
// file system 这个模块专门用来对系统文件的增删改查各种操作

const fs =require('fs');
fs.writeFile('./hello.txt',"hello node",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("数据写入成功");
    }
})