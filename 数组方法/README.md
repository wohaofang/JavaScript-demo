
==================
	2017.03.27
==================

知识点
-----------------------------
	【arguments】
		参数集合
		.length
		[]

	【数学方法】
		Math.random()
		Math.ads()  绝对值
			.ceil() 向上取整
		Math.floor()
		Math.round() 四舍五入
		Math.pow(n,m) n的m次方  
		Math.sqrt()
		Math.max()
		Math.min()

	【字符串方法】
		查找你想要字符
			只查找一次
			严格区分大小写
		str.indexOf()   自左向右
		str.lastIndexOf() 自右向左
			-1

		str.substring(开始下标，结束下标) 截取字符串
			不包含结束下标所在那一位字符
			str.substring(开始下标);
			从开始下标截取到字符串结束

		str.split() 字符串 -> 数组
		str.toUpperCase()  变大写
		str.toLowerCase()  变小写
		str.charAt()

	【数组方法】
		arr.join('+ -')  数组 -> 字符串
		arr.push()	从后面添加数组
		arr.pop()		从后面删除
		arr.unshift()  从前面添加
		arr.shift()    从前面删除
		arr.concat()	数组的拼接
		arr.reverse()	翻转

		arr.sort()

		arr.splice()
			删除
				arr.splice(开始下标，个数)
			替换
				arr.splice(开始下标，个数, 替换的东西)
			插入
				arr.splice(开始下标，0, 替换的东西)

	【json】
		var arr=['a', 'b', 'c']
		.length
		arr[0]

		// 姓名:张三 年龄28 性别：看着办
		var json={
			'name':'张三',
			'age' : 28,
			'sex' : '看着办'
		};

		var arr=[value1, value2, value3]

		var json={
			key1:value1,
			key2:value2
		};

		定义
			var json={'name':'value'};
			json.age=28;
			json['age']=18;

		调用
			json.name
			json['name']

		--------------------------
			var arr=[1, 'a', true, {}] 不好
			数组中只存放一种类型的数据
				return '0'+n / ''+n

			人 -> json
				姓名：张三
				年龄：28
				已婚：false
				...

		['200px', '300px', 'red']

		{
			'width':'200px',
			'height':'300px',
			'color':'red'
		}

--------------------------------------------
	JavaScript
		ECMAScript - 几乎兼容
		DOM - 中间
		BOM - 几乎不兼容

	【DOM】
		创建标签
			document.createElement(标签名)

			注意：
				必须从document下创建元素
				oUl.createElement 错的

		插入
			父级.appendChild(子级)
			父级.insertBefore(子级, 谁)

		删除
			父级.removeChild(子级)
