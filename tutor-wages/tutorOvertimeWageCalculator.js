function tutorOvertimeWageCalculator(timeSheet,level){
    var arr=timeSheet.split("-");
   
    var overTimeWages=0;
    var level1=75;
    var level1overTimeRate=0.07;
    var level2overTimeRate=0.09;
    var level3overTimeRate=0.12;
    var level2=90;
    var level3=105;
    
var overTimeWages=0;


var totalHours=0;



for(let i=0;i<arr.length;++i){

var hour=parseInt(arr[i]);
	
	totalHours+=hour;

}


if(totalHours>40){

if(level==1){

var rounded=Math.ceil((totalHours-40)*(level1overTimeRate*level1+level1));
	
    overTimeWages=rounded;
   
    }
    
    else if(level==2){

        var rounded=Math.round((totalHours-40)*(level2overTimeRate*level2+level2));
	
    overTimeWages=rounded;

    }
    
    else if(level==3){
        var rounded=Math.round((totalHours-40)*(level3overTimeRate*level3+level3));
	
        overTimeWages=rounded; 

   
    }


}




return overTimeWages;
}