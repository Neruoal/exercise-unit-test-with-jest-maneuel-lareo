


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Un dollar debe ser  Yenes)", function() {
   const { fromDollarToYen } = require('./app.js')
   const yen = fromDollarToYen(1);
   const expected = 1.07 * 156.5;
   expect(fromDollarToYen(1.07)).toBe(167.455);

})

test("Un Yen debe ser Pound)", function() {
   const { fromYenToPound } = require('./app.js')
   const pound = fromYenToPound(1);
   const expected = 156.5 * 0.87;
   expect(fromYenToPound(156.5)).toBe(136.155);
   })
