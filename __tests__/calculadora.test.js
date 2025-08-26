import { somar, subtrair, multiplicar, dividir } from '../src/calculadora.js';

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

test("Deve multiplicar dois números corretamente", () => {
       const a = 10;
       const b = 4;
       const resultado = multiplicar(a, b);
       expect(resultado).toBe(40);
   });

   test("Deve dividir dois números corretamente", () => {
       const a = 10;
       const b = 5;
       const resultado = dividir(a, b);
       expect(resultado).toBe(2);
   });

   test("Deve lançar um erro ao dividir por zero", () => {
       expect(() => dividir(10, 0)).toThrow("Divisão por zero não permitida");
   });
})