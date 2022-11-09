let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
};

const dollaryen =(dollar)=>{
    let yen = (dollar*0.8)*127.9
    return yen
};
  

const poundyen =(pound)=>{
    let yenes = (pound*1.2)*127.9
    return yenes
};

const sum = (a,b) => {
    return a + b
};


module.exports={sum,fromEuroToDollar, dollaryen, poundyen}