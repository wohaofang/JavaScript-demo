var temp=[];  //定义一个寄存器，存储输入的数字及操作符
var btn=document.getElementsByTagName('input');;  //获取鼠标点击的元素数组
var inputFlag=false;  //判断是否是连续输入的数字
var result;


debugger;
//定一个事件监听函数，兼容IE,safari,chrome,firefox;
function addEvent(obj,type,handle){
	try{ //safari,chrome,firefox,IE9.0及其以上版本
		obj.addEventListener(type, handle, false);
	}catch(e){
		try{ // IE8.0及其以下版本
			obj.attachEvent('on' + type, handle);
		}catch(e){//早期浏览器
         	obj['on' + type ]=handle;
		}
	}
};

//循环给每一个按钮绑定事件
for (var i =0; i<btn.length; i++){
	console.log(btn[i]);
	addEvent(btn[i],"click",btnClickHandle)
	
}

//定义点击事件的处理函数，为计算器的核心逻辑判断部分
function btnClickHandle(e) {
	console.log(e.target.value);
	var value = e.target.value;
	temp.push(value);
	if( (!isNaN(temp[temp.length-2])) && (!isNaN(temp[temp.length-1])) ||((isNaN(temp[temp.length-2])) && (temp[temp.length-1]==".")) ){//判断数组的上一个元素和本次
        //判断temp的当前元素和前一个元素是否为数字或者是小数点如果是，则将其值追加入到temp的前一个元素，并删除当前元素
         temp[temp.length-2]=temp[temp.length-2]+temp.pop();
         document.getElementById('result').innerHTML=temp[temp.length-1];
	}else if(value=="clear"){
		//如果点击的是清除按钮，则清除屏幕，并且将数组置空；
		document.getElementById('result').innerHTML="";
		temp=[];
	}else{
		//如果不是上述两种情况则默认是单数字或者符号输入
		document.getElementById('result').innerHTML=value;
	}
	var tempStr=temp.toString();//将数组转化为字符串方便后面indexof做判断
	console.log(tempStr);
	console.log(tempStr.indexOf("="));
	if(tempStr.indexOf("=")>1){
		//如果有输入等于号开始执行计算函数。并且当除数为0的时候显示NaN
		result=(Calculation(temp[0],temp[2],temp[1])!=="NaN")?parseFloat((Calculation(temp[0],temp[2],temp[1])).toFixed(8)):"NaN";
		getResult(result);
	}
	if(tempStr.indexOf("sin")>0||tempStr.indexOf("cos")>0||tempStr.indexOf("pow")>0||tempStr.indexOf("√")>0){
		//如果是输入三角函数或是输入平方开方，则执行计算函数
		document.getElementById('result').innerHTML=parseFloat((Calculation(temp[0],'',temp[1])).toFixed(8));
		temp=[parseFloat((Calculation(temp[0],temp[2],temp[1])).toFixed(8))];
	}
	if (tempStr.indexOf("+")>0||tempStr.indexOf("-")>0||tempStr.indexOf("*")>0||tempStr.indexOf("-")>0) {

		if(tempStr.charAt(6)=="+"){
			result=parseFloat((Calculation(temp[0],temp[2],temp[1])).toFixed(8));
			getResult(result,"+");
		}else if(tempStr.charAt(6)=="-"){
			result=parseFloat((Calculation(temp[0],temp[2],temp[1])).toFixed(8));
			getResult(result,"-");
		}else if(tempStr.charAt(6)=="*"){
			result=parseFloat((Calculation(temp[0],temp[2],temp[1])).toFixed(8));
			getResult(result,"*");
		}else if(tempStr.charAt(6)=="/"){
			result=parseFloat((Calculation(temp[0],temp[2],temp[1])).toFixed(8));
			getResult(result,"/");
		}
	}
}

//定义计算器函数，处理计算逻辑并返回结果
function Calculation(num1,num2,opr){
	switch(opr){
		case "+":return parseFloat(num1)+parseFloat(num2);
		break;
		case "-":return parseFloat(num1)-parseFloat(num2);
		break;
		case "*":return parseFloat(num1)*parseFloat(num2);
		break;
		case "/":{
			if (num2==0) {
				alert("除数不能为0");
				return "NaN";
			}else{
				return parseFloat(num1)/parseFloat(num2);
			}
		}
		break;
		case "sin":return Math.sin(Math.PI*parseFloat(num1)/180);
		break;
		case "cos":return Math.cos(Math.PI*parseFloat(num1)/180);
		break;
		case "pow":return parseFloat(num1)*parseFloat(num1);
		break;
		case "√": return parseFloat(Math.sqrt(num1));
	}
}

//定义结果函数，显示到显示屏，并且判断是否为连续计算
function getResult(result,opr){
	document.getElementById("result").innerHTML=result;
	//判断是否需要连续计算
	if(opr){
		temp=[result,opr];
	}else{
		temp=[result]
	}
}
