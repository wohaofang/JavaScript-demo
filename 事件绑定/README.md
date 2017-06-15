
	【事件绑定】——必须都是绑定
		同一个元素上加相同事件

		高级浏览器
			obj.addEventListener(事件名, fn, false);
				事件名没有 on

		IE
			obj.attachEvent(事件名, fn)
				事件名有 on

		attachEvent 有问题
			this -> window

		addEventListener 有问题
			return false 不能用了
			ev.preventDefault(); 阻止默认事件

		false   事件冒泡
		true    事件捕获
			事件流

	【解除绑定】 —— 不能解除匿名函数的绑定
		removeEventListener(事件名, fn, false)
		detachEvent('on'+事件名, fn)

	【ready事件】
		window.onload
			
		ready
			DOMContentLoaded 快
			onreadystatechange
				document.readyState == 'complete'

		$(function (){})

		script 放在页面最后
			1. HTML加载完了
			2. script 阻塞加载

	【滚轮】
		onmousewheel 非FF
			oEvent.wheelDelta > 0 上

		DOMMouseScroll - 绑定
			event.detail > 0 下

		addWheel(obj, function (down){
			if (down)
			{
				// 下
			}
			else
			{
				// 上
			}
		});

	【事件对象】
		event 非FF
		ev 高级

	【事件委托】

	【resize 的 div】

	【自定义属性】
		调用自定义属性与变量


	Chrome
	Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36

	IE10
	Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E)

	IE7
	Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E)

	FF
	Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0


























