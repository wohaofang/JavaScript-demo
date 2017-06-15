
	【事件委托】
		原理：事件冒泡
		oEvent.target  高级浏览器
		oEvent.srcElement 非FF

		应用场景：
			1. 子级非常多
			2. 给未来元素加事件

	【over out 有问题的】
		enter 
		leave

		fromElement toElement

	【未定义属性与未定义变量】

	【jQuery】
		JavaScript
		jQuery 也是 JS
			方便、兼容、高效

	【选择器】
		CSS选择器
			div
			div p
			ul>li
			* 
			div1, div2

		伪类选择器
			:first
			:last
			:eq(下标)  下标从0开始
			:even
			:odd

			:has(标签)
			:contains(文字)

		属性选择器
			标签名[属性名=属性值]
				自定义也可以

	【事件】 —— jQuery 中的事件都是绑定的
		onclick -> click
		onmouseover -> mouseover
		
		hover
		onmouseenter
		onmouseleave

	【事件绑定】
		obj.on(事件名, fn)
		obj.off() 解除所有事件
		obj.off('click') 解除所有点击事件
		obj.off('click', fnName) 解除指定的事件

	【事件对象】
		ev jQ 封装好的事件对象
		originalEvent 原生事件对象

	【阻止默认事件】
		return false;
		ev.preventDefault();

	【取消冒泡】
		return false;
		ev.stopPropagation();

	【事件委托】
		obj.on(事件名, 选择器, function(){})

	【小方法】
		.css()
			获取
				obj.css('width')
			设置
				obj.css('width', '200px')
			批量设置
				obj.css({width:xxx, height:xxx})

		.attr()
			获取
				obj.attr('value')
			设置
				obj.attr('index', 1)
			批量设置
				obj.attr({value:xxx, index:xxx})

		.show()
		.hide()

		.addClass
		.removeClass

		.index() * 坑
			默认，获取的是同级元素中的下标
			.index(选择器)
				选择的范围中的第几个

	【循环】
		each
			$(obj).each(function (index){
				this
			})

			$.each(arr, function (index, value){

			});

			$.each(json, function (index, value){

			});

	【原生与jQuery转换】
		jQ 方法，只能操作jQ对象

		jQ -> 原生
			[下标]
			.get(下标)

		原生 -> jQ
			$()
