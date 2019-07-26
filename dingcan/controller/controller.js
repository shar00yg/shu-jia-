exports.saveData = funciton(req,res)
{
    //获取手机号和食物
    let {phone,food} =req.query;
    file.saveData(phone,req.query,(msg)=>{
        res.send(msg);
    });
}




//显示所有的订单
exports.showAll = funciton (req,res)
{
    file.getAll((fileList)=>{
        console.log(fileList);
    });
}