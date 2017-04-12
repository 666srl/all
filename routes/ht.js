var express = require('express');//引入express模块
var router = express.Router();
router.get('/list',function(request,response){//第一个参数为请求，二个为响应
	console.log("调取的内容")
	response.send('shenrui')
})


module.exports = router;//输出