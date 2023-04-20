function tutorWageCalculator (timeSheet,level){
var arr=timeSheet.split("-");
var normalWages=0;
var overTimeWages=0;
var totalWages=0;
var level1=75;
var level1overTimeRate=0.07;
var level2overTimeRate=0.09;
var level3overTimeRate=0.12;
var level2=90;
var level3=105;
var totalHours=0;

if(arr.length >=5 && arr.length <7){

for(let i=0;i<arr.length;++i){

var hour=parseInt(arr[i]);
	
	totalHours+=hour;

}


if(totalHours<=40){
	
if(level===1){
	
	totalWages =totalHours *level1;
}

else if(level===2){
	
	
	totalWages =totalHours *level2;
}



else if(level===3){
	
	totalWages =totalHours *level3;
}


}







}

return totalWages;

}



