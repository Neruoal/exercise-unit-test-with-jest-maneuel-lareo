
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function() {
    let valueInYen = (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return valueInYen;
}


}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }