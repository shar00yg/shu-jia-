const express = require('express');

const app = express();

app.get('/dingcan',(req,res)=>{
    console.log(req.query);
    res.send();
})
app.use(express.static('public'));
app.listen(4000);