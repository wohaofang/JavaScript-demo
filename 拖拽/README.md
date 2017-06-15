	【冒泡】
		子级触发的事件，会传递给父级
		无论子级有没有事件，都会传递给父级
		冒泡与位置无关

	【取消冒泡】
		一定在子级上取消冒泡
		oEvent.cancelBubble=true;
		

		一般不用取消冒泡，出现问题再取消

	【键盘】
		down
		输入文字
		up

		onkeydown
		onkeyup

		oEvent.ctrlKey  true   false
		oEvent.shiftKey
		oEvent.altKey

		oEvent.keyCode
			a -> 65
			b -> 66
			0 -> 48
			←  37
			↑  38
			→  39
			↓  40
			空格 32
			回车 13
			删除 8

		* 不能频繁开关定时器

		注意：
			允许 ctrl + a c 1 2
			不允许 a+b

	【表单】
		get
			大小 32k 左右
			不安全

		post
			大小
			相对安全 

	【默认事件】
		阻止默认事件
			return false

		自定义右键
		阻止 ctrl+c
		阻止 ctrl+a
		阻止 ctrl+v
		阻止 F12
		阻止 ctrl+u
		只能输入数字的框

	【拖拽】
		down
		move
		up