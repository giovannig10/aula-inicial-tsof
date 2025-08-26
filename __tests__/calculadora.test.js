import { somar } from '../src/calculadora.js';

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
       const a = 2;
       const b = 3;
       const resultado = somar(a, b);
       expect(resultado).toBe(5);
    });
})