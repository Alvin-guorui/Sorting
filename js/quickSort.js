function quickSort(){
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
	var li = document.getElementsByTagName('li');
	length = li.length;
	i = 0;
	j = length-1;
	key = 0;
	index = 1;
	var interval2 = setInterval(function(){
		var interval1 = setInterval(function(){
			for(var m =0;m<length-1;m++){
				if(li[j].innerText < li[key].innerText){
					swap2(key,j,index);
					key = j;
					index++;
					break;
				}
			}
			j--;
			for(var n =0;n<length-1;n++){
				if(li[i].innerText > li[key].innerText){
					swap2(i,key,index);
					key = i;	
					index++;
					break;
				}
			}
			i++;
			clearInterval(interval1);
			if(i == j){
				clearInterval(interval2);
			}
		}, (length-1)*2000+(length-2)*2000);
	}, (length-1)*2000+(length-2)*2000);
}