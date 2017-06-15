【DOM】
    
获取元素
    nextSibling // 给ie6 用的

    nextElementSibling // 兼容非ie6

    previousElementSibling  

    previous 
    insertB

    document.documentElement.clientHeight; \


    滚动距离

      document.documentElement.scrollTop;
      document.body.scrollTop;

    高级的获取不上自定义属性


    getAttribute 获取自定义属性
    setAttribute ('data-xxx',值);


    【window事件】
    	window.onload  
    	window.onscroll
    	window.onresize;


【offset】
    offsetWidth   盒子模型的宽度 width+padding+border
    offsetHeight  盒子模型的高度
    offsetLeft    距离定位父级的距离
    offsetTop     距离定位父级的高度

    offsetParent   定位的父级
    parentNode     DOM结构中的父级

    注意  display：none的元素获取不到offser属性

【可视区】   client//客服端
    
    document.documentElement.clientHeight;
    document.documentElement.clientWidth;

【滚动距离】

    document.body.scrollTop                chrome
    document.documentElement.scrollTop     非chrome

【自定义属性】

    obj.getAttribute('自定义属性名');
    obj.serAttribute('data-xxx',值)；