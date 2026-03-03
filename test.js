


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Un dollar debe ser 149.03 Yenes)", function() {
   const { fromDollarToYen } = require('./app.js')
   const yen = fromEuroToYen(3.5);
   const expected = 3.5 * 1.07;
   expect(fromEuroToYen(3.5)).toBe(3.745);

})


    
    expect(fromYenToPound(1000)).toBe(7.2);
})