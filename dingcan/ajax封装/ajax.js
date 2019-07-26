function ajax(json){
    var method = json.method.toUpperCase()||'GET';//设置数据传输方式的默认值
    var data = json.data||{};
    var xhr =new XMLHttpRequest();
    
    switch(method){
        case 'GET'://'https://www.baidu.com?name=shar&age=18'
            xhr.open(method,json.url+'?'+jsonUrl(json.data),true);
            xhr.send(null);
            break;
        case 'POST':
            xhr.open('post','https://www.baidu.com',true);
            xhr.setRequestHeader('content-type','appliction/x-www-form-urlencode');
            xhr.send(jsonUrl(json.data));
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status>=200&&xhr.status<=300||xhr.status===304){
                // console.log(xhr.responseText);
                json.success(xhr.responseText);
            }else{
                json.error(xhr.status);
            }
        }
    }
    function jsonUrl(data){  //将data对象转换成字符串模式
        var arr=[]
        for(var key in data){
            arr.push(key+'='+data[key]);
        }
        return arr.join('&');
    }
}

