function tutorOvertimeWageCalculator(timeSheet,level){

    
var overTimeWages=0;


var totalHours=0;

if(arr.length >=5 && arr.length <7){

for(let i=0;i<arr.length;++i){

var hour=parseInt(arr[i]);
	
	totalHours+=hour;

}
if(level==1){
	
    overTimeWages=(totalHours-40)*level1overTimeRate;
   
    }
    
    else if(level==2){
        
    overTimeWages=(totalHours-40)*level2overTimeRate;
    totalWages=(totalHours*level2)+overTimeWages;
    }
    
    else if(level==3){
        
    overTimeWages=(totalHours-40)*level3overTimeRate;
    totalWages=(totalHours*level3)+overTimeWages;
    }


}
}