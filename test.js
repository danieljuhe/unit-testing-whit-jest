const {sum, fromEuroToDollar, dollaryen, poundyen} = require('./add.js');

test ('suma de 84 + 9 = 93', ()=>{
    let valor = sum(84,9);
    expect(valor).toBe(93);
});

test("One euro should be 1.2 dollars", ()=>{
    expect(fromEuroToDollar(1)).toBe(1.2);
});

test("50$ should be 5116 Yen", ()=>{
    expect(dollaryen(50)).toBe(5116);
});

test("12 pounds should be 1841.76 Yen", ()=>{
    expect(poundyen(12)).toBe(1841.76);
});
