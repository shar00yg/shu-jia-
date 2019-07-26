const file = require('../models/file.js');
exports.saveData = function(req,res)
{
    //获取手机号和食物
    let {phone,food} =req.query;
    file.saveData(phone,req.query,(msg)=>{
        res.send(msg);
    });
}
//显示所有的订单
exports.showAll = function (req,res)
{
    file.getAll((arrList)=>{
        res.render('all');
    });
}