// fs模块是nodejs中内置的一个核心模块
// file system 这个模块专门用来对系统文件的增删改查各种操作

const fs =require('fs');
//异步写入文件，如果文件不存在，则自动创建

//  可以在文件里写入任意数据，且所有数据都会呗隐式转换成字符串

//异步写入文件
// fs.writeFile('./hello.txt',"function(){console.log(1);}",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("数据写入成功");
//         console.log(err);
//     }
// });


//同步的代买比异步的先执行
// console.log('我是同步的代码');

//同步写入文件
// let result = fs.writeFileSync('./heaven.txt','我是 heaven');
// console.log(result);

// readFile(路径，回调函数)
//   1.返回的数据是buffer，用buffer的toString（）方法转换成字符串
//   2.


fs.readFile('./hello.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})