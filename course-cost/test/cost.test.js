

describe('Test for greet function' , function(){

    it('Return discount for p1 based on start date' , function(){
    	
    const course= courseCost("p1",9);
    
 assert.equal(0,course.discount);
});


it('Return total cost for p1 course based on start date' , function(){
    	
    const course= courseCost("p1",15);
    
 assert.equal(7850,course.cost);
});

it('Return total cost for p2 course based on start date' , function(){
    	
    const course= courseCost("p2",15);
    
 assert.equal(8990,course.cost);
}); 


it('Return total cost for p3 course based on start date' , function(){
    	
    const course= courseCost("p1",15);
    
 assert.equal(7850,course.cost);
});


it('Return total cost for p1 course based on start date' , function(){
    	
    const course= courseCost("p1",15);
    
 assert.equal(7850,course.cost);
});


it('Return invalid code if incorrect code is passed' , function(){
    	
    const course= courseCost("t1",15);
    
 assert.equal("Invalid code",course.status);
});


it('Return invalid day if an invalid date is passed' , function(){
    	
    const course= courseCost("p1","u");
    
 assert.equal("Invalid day",course.status);
});




});
