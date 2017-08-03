
/*冒泡排序*/
function bubbleSort () {
	//将输入的数据转为数组
	var inputValue = document.getElementsByTagName("input")[0].value;
	var inputArray = inputValue.split(",");
	var intergerArray = inputArray.map(function(data){
		return +data;
	})
	//判断有没有div存在，有删除重新排序
	var deleteDiv = document.getElementsByTagName("div")[0];
	if(deleteDiv != undefined){
		document.body.removeChild(deleteDiv);
	}
	//创建div和ul，并将数组值添加
	var intergerLength = intergerArray.length;
	var div = document.createElement("div");
	div.style.width = intergerLength*40 +'px';
	var arrayLength = document.getElementById("length").value;
	if(arrayLength != ""){
		div.style.width = arrayLength*40 +'px';
	}
	var ul = document.createElement("ul");
	ul.id = '0';
	for(var temp in intergerArray){
		var li = document.createElement("li");
		li.innerText = intergerArray[temp];
		ul.appendChild(li);
	}
	document.body.appendChild(div);
	div.appendChild(ul);
	//主要步骤
	var liLength = document.getElementsByTagName('li').length;
	var length = liLength;
	var temp;

	var j = 1;
	var interval2 = setInterval(function (){
		//外层循环
		var i = 0;
		var compare = 0;
		var interval1 = setInterval(function (){
			//内层循环
			if(i<length-1){
				changeBorderColor();
				var p = document.getElementsByTagName('li');
				p[i].style.borderColor = 'green';
				p[i+1].style.borderColor = 'green';
				if(p[i].innerText > p[i+1].innerText){
					swap1(i);	//交换的动画
					compare++;
				}
				i++;
			}
			else{
				clearInterval(interval1);
				//比较次数为0，则排序完成
				if(compare == 0){
					changeBorderColor();
					clearInterval(interval2);
				}else{
					//输出每次排序结果
					var text = document.createElement("p");
					text.innerText = "第"+j+"趟排序：";
					j++;
					div.appendChild(text);
					var ul = document.createElement("ul");
					for(var temp = 0;temp<length;temp++){
						var li = document.createElement("li");
						var p = document.getElementsByTagName('li');
						li.innerText = p[temp].innerText;
						ul.appendChild(li);
						div.appendChild(ul);
					}
				}
			}
		}, 2000);
	}, (length-1)*2000);
}

