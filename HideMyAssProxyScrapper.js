var count = 0;
var ip = "";
var extra = "";
var origin = "";
var comboIp = "";
var newComboIp = "";
var ipPortArr = new Array();var i =0;

$(".hma-table").find("tr").each(function(){
	 ip = "";
	 extra = "";
     $(this).find("td:nth-child(2)").each(function(){
			count = 0;
			
			$(this).find("div").remove();
			
			$(this).find("span").each(function(){
					
					if(count <= 0){
						 count = 1;
						 var final =  $(this).text();
						 comboIp = final.substring(final.lastIndexOf("}")+1, final.length)
					}
					
					if($(this).hasClass("fpC3") || $(this).css('display') == 'none' || $(this).text() == '.'){
						extra = $(this).text();
						
						var tempStr1 = comboIp.substring(0, comboIp.lastIndexOf('-')+1);
						var tempStr2 = comboIp.substring(comboIp.lastIndexOf('-')+1, comboIp.length);
						
						tempStr2 = tempStr2.replace(extra,"-");
						
						newComboIp = tempStr1 + tempStr2;
						comboIp = newComboIp;
					}
					
		    });
			
			newComboIp = newComboIp.trim();
			var ipArray = newComboIp.split('');
			var newArray = new Array();
			var newIndex=0;
			
			if(newComboIp.endsWith("-")){
				for(var index=0; index<ipArray.length-1; index++){
					if(ipArray[index] != '-' && ipArray[index] != '.'){
						newArray[newIndex] = ipArray[index];
						if(ipArray[index+1] == '-' || ipArray[index+1] == '.'){
							newIndex++;
							newArray[newIndex] = '.';
						}
						newIndex++;
					}
				}
			}else{
				for(var index=0; index<ipArray.length; index++){
					if(ipArray[index] != '-' && ipArray[index] != '.'){
						newArray[newIndex] = ipArray[index];
						
						if((index+1) <= ipArray.length){
							if(ipArray[index+1] == '-' || ipArray[index+1] == '.'){
							newIndex++;
							newArray[newIndex] = '.';
							}newIndex++;
						}
						
					}
				}
			}
			
			
			if(newArray[newArray.length-1] == '.'){
				newArray.splice(newArray.length-1, 1);
			}
			 ip = newArray.toString().replace(/,/g, '');
			
		});
		
		$(this).find("td:nth-child(3)").each(function(){
			ipPortArr[i] = ip+":"+$(this).text().trim();
			i++;
		});
});
console.log(ipPortArr);
