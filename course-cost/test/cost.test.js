

describe('Test for greet function' , function(){

    it('Return discount for course based on start date' , function(){
    	
    const course= courseCost("p1",24);
    
 assert.equal(3140,course.discount);
});

    

});
