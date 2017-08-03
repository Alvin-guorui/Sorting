/*插入排序*/
function insertionSort(){
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
	var length = li.length;
	if(li[0].innerText > li[1].innerText){
		swap1(0);
	}
	index = 2;
	var j =1;
	var interval2 = setInterval(function(){
		var i = index;
		console.log(i);
		var interval1 = setInterval(function(){
			var li = document.getElementsByTagName('li');
			changeBorderColor();
			if(i>0){
				li[i].style.borderColor = 'green';
				li[i-1].style.borderColor = 'green';
				console.log('i='+i);
				if(li[i].innerText < li[i-1].innerText){
					swap1(i-1);
				}
				i--
			}else{
				console.log(1);
				index++;
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
				}
				div.appendChild(ul);	
				var compare = 0;
				var li = document.getElementsByTagName('li');
				for(var m =0;m<length-1;m++){
					if(li[m].innerText < li[m+1].innerText){
						compare++
					}
				}
				console.log('compare='+compare);
				if(compare == length-1){
					console.log('compare='+compare);
					clearInterval(interval2);
					changeBorderColor();
				}
				clearInterval(interval1);	
			}
		}, 2000);
	}, (length-1)*2000+50);
}