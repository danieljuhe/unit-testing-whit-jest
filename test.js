const {sum, fromEuroToDollar, dollaryen, poundyen}= require('./app.js');

test ('suma de 84 + 9 = 93', ()=>{
    let valor = sum(84,9);
    expect(valor).toBe(93);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("47$ should be 5005.5 Yen", ()=>{
    expect(dollaryen(47)).toBe(5005.5);
});

test("30 pounds should be 4794 Yen", ()=>{
    expect(poundyen(30)).toBe(4794);
});