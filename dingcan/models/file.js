const fs =require('fs');

//保存用户数据
exports.saveData = function (phone,data,callback)
{
    fs.writeFile('./data/'+phone+'.txt',JSON.stringify(data),(err)=>{
        if(!err){
            callback('订单成功，请耐心等待');
        }
    })
}
exports.getAll = function (callback)
{
    fs.readdir('./data',(err,fileList)=>{
        let arrList = fileList.map((value)=>{
            return value.replace('.txt','')
        });
        if(!err){
            callback(arrList);
        }
    })
}