
XML 简介
    可扩展标记语言可以对文档和数据进行结构化处理
    设计宗旨是传输数据
    标签需要自定义，没有被预定义
    他是w3c的推荐标准

语法
    第一行可以是一个声明（可选  ）
    <?xml version='1.0' encoding='utf-8'?>

    创建根元素
    所有XML元素都必须有关标签
    对大小写敏感
    真确嵌套
    可有有属性值 必须加引号
    空格会被保留
    实体引用
解析


	json
		json是在JavaScript中读写
		是轻量级的数据交互格式，渲染速度快
		很多编程语言都有针对json的用法

		json字符串

	json的解析
		eval('('+json+')')
		for in

XMLHttpRequest 对象
	Ajax 
		Ajax = Asynchronous JavaScript And XML
		是一种在无需重新加载这个页面，局部更新网页的技术
		通俗的说Ajax就是js通过url去加载数据，这个过程用户通常是看不到的
		传统的网页，如果需要更新内容，必须重新加载这整个页面
	为什么使用Ajax
		异步加载数据，无需切换页面
		更佳的用户体验，：局部刷新，及时验证，操作步骤简化
		节省流量
		js控制数据加载，更加的灵活
	创建XMLHttpRequest对象
		现代浏览器都支撑
		老版本的IE5IE6要使用ActiveX对象:
		xhr = new ActiveXObject('Microsoft.XMLHTTP');

		open(method,url,asyn)打开和服务器的链接
			method : String ,请求的类型GET或POST
			url : String ,文件在服务器上的位置
			asyn : Boolean , true(异步)或 false(同步)

			使用GET 还是 POST

			无法使用缓存文件使用POST
			向服务器发送大量数据使用POST
			发送用户输入隐秘信息时，POST比get 更加稳定可靠

		send 发送给服务器
		服务器响应
			readyState:存在XMLHttpRequest的状态。从0到4发生变化。
				0：请求未初始化
				1：服务器连接已建立
				2：请求已接收
				3：请求处理中
				4：	请求已完成，且相应已就绪
			status:存有响应就绪后，是否找到页面，
				200："OK".404:未找到页面
		Ajax跨域请求
			什么是跨域



-------------------------------------------

ECMAScript 6

	什么是ES6
		JavaScript是由ECMAScript DOM BOM 三部分组成
		ES 就是JavaScript中额语法规范
		没有ES，js代码就无法解答
	let命令
		声明变量  类似于var 但声明的变量只在let命令所在代码块内有效
		let  是新增的块级作用域
	const命令
		const声明一个常亮，一旦声明，无法被改变，也必须赋值
	class语法
	arrow functions（箭头函数）
	=> 定义函数
	Destructuring(解构)
	defult(函数参数默认值)
	rest参数


----------------------------------------------
	Node.js
	Node.js是运行在服务器端的JavaScript平台
	Node.js增加了HTTP,SOCKET,File System等处理模块

	优点
		采用了异步示I/O于事件驱动，处理高并发很大的有事

	 
