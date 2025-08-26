import { somar, subtrair } from '../src/calculadora.js';

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
       const a = 2;
       const b = 3;
       const resultado = somar(a, b);
       expect(resultado).toBe(5);
    });
test("Deve subtrair dois números corretamente", () => {
       const a = 13;
       const b = 3;
       const resultado = subtrair(a, b);
       expect(resultado).toBe(10);
    });
})