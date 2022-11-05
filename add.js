let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const dollaryen =(yen)=>{
    let (dollar*1.2) = (yen*127.9)
    return dollar
}

const poundyen =(yenes)=>{
    let (pound/0.8) = (yenes*127.9)
    return pound
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(8,3))

module.exports={sum,fromEuroToDollar, dollaryen, poundyen}