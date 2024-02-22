function add(x,y){
    return x + y;
}

test("add(100,200) => 300", function(){
    // arrange
    var n1 = 100,
        n2 = 200,
        expectedResult = 300;

    // act
    var actualResult = add(n1, n2);

    // assert
    expect(actualResult).toBe(expectedResult);
})