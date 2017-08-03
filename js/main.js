/*随机生成数组*/
function createArray(){
	var array = [];
	var arrayLength = document.getElementById("length").value;
	for(var i=0;i<arrayLength;i++){
		var num = Math.floor(Math.random()*9);
		array[i] = num;
	}
	var input = document.getElementsByTagName("input")[0];
	input.value = array.join(",");
}


//交换值和位置
function swap1 (i) {
	var left = 1;
	var interval = setInterval(function (){
			var p = document.getElementsByTagName('li');
			p[i].style.left = left+'px';
			p[i+1].style.left = -left+'px';
			left++;
			if(left > 39){
				var temp = p[i].innerText;
				p[i].innerText = p[i+1].innerText;
				p[i+1].innerText = temp;
				p[i].style.left = 0;
				p[i+1].style.left = 0;
				clearInterval(interval);
			}
		}, 50);
}


//交换i和j对应的值及位置，m是一个标记，用来记录第几次排序
function swap2(i,j,m){
	var left = 1;
	interval = setInterval(function(){
		var li = document.getElementsByTagName('li');
		li[i].style.left = left + 'px';
		li[j].style.left = -left + 'px';
		left++;
		if(left > (j-i)*39){
			var temp = li[i].innerText;
			li[i].innerText = li[j].innerText;
			li[j].innerText = temp;
			li[i].style.left = 0;
			li[j].style.left = 0;
			clearInterval(interval);
			
			var text = document.createElement("p");
			text.innerText = "第"+m+"趟排序：";
			div.appendChild(text);
			var ul = document.createElement("ul");
			var p = document.getElementsByTagName('li');
			for(var n = 0;n<length;n++){
				var li = document.createElement("li");
				var p = document.getElementsByTagName('li');
				li.innerText = p[n].innerText;
				ul.appendChild(li);
			}
			div.appendChild(ul);
		}	
	}, 50);
}


//将所有li的边框颜色置为红色
function changeBorderColor(){
	var li = document.getElementsByTagName("li");
	for(var i = 0;i<li.length;i++){
		li[i].style.borderColor = 'red';
	}
}


//改变最小值颜色为绿色，其他为红色
function changeBorderColor2(i){
	var li = document.getElementsByTagName("li");
	for(var j = 0;j<li.length;j++){
		li[j].style.borderColor = 'red';
	}
	li[i].style.borderColor = 'green';
}

/*function swap2(i,j){
	var li = document.getElementsByTagName("li");
	console.log(li[0]);
	li[i].style.transition="-webkit-transform 500ms ease-out";
    li[i].style.webkitTransform="translate("+(j-i)*39+"px,0px)";
    li[j].style.transition="-webkit-transform 500ms ease-out";
    li[j].style.webkitTransform="translate("+(i-j)*39+"px,0px)";

}*/
