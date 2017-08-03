/*选择排序*/
function selectionSort () {
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
	div = document.createElement("div");
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
	length = document.getElementsByTagName("li").length;
	var temp;
	var index = 0;
	changeBorderColor2(index);
	min = 0;
	minNumber = 0;
	var interval2 = setInterval(function (){
		var i = index;
		var p = document.getElementsByTagName("li");
		//设置最小值为第一个数，第二次排序为第二个数，以此类推
		min = p[index].innerText;
		minNumber = index;
		changeBorderColor2(i);
		var interval1 = setInterval(function (){
			if(i < length-1){
				var p = document.getElementsByTagName("li");
				if(p[i+1].innerText < min){
					min = p[i+1].innerText;
					minNumber = i+1;
					changeBorderColor2(i+1);
				}
				i++;
			}
			else{
				clearInterval(interval1);
				var compare = 0;
				for(var n = 0;n<length-1;n++){
					var li = document.getElementsByTagName('li');
					if(li[n].innerText > li[n+1].innerText){
						compare++;
					}
				}
				if(compare == 0){
					clearInterval(interval2);
					changeBorderColor();
				}
				else{
					//判断最小值是否为第一个数，是则第一次排序完成，否则交换最小值与第一个数
					if(minNumber != index){
						//交换函数
						swap2(index,minNumber,index+1);
						index++;
					}
					else{
						index++;
						var text = document.createElement("p");
						text.innerText = "第"+index+"趟排序：";
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
				}			
			}
		},(minNumber-index)*2000);
	},2000*(length-1));
	/*for (var i=0; i<length-1; i++){
		var min = intergerArray[i];
		var minNumber = i;
		for(var j=i+1;j<length;j++){
			if(intergerArray[j] < min){
				min = intergerArray[j];
				minNumber = j;
			}
		}
		temp = intergerArray[i];
		intergerArray[i] = intergerArray[minNumber];
		intergerArray[minNumber] = temp;
		var p = document.createElement("p");
		p.innerText = intergerArray;
		div.appendChild(p);
	}*/
}