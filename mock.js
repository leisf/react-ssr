// 模拟接口

const express = require('express')
const app =express()

app.get('/api/course/list',(req,res)=>{
	// 支持跨域
	res.header('Access-Control-Allow-Origin','*')
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
	res.header('Content-Type',"application/json;charset=utf-8")
	res.json({
		code:0,
		list:[
			{name:'web',id:1},
			{name:'js',id:2},
			{name:'jave',id:3},
			{name:'C++',id:4}
		]
	})
})

app.listen(9090,()=>{
	console.log('mock启动完毕')
})