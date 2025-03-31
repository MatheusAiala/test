const Calculadora = require("./classes/Calculadora")

test("Deve somar dois numero", () => {
    // given - dado
    calc = new Calculadora()
    // when -- quando
    resultado = calc.somar(2,3)
    // then-- entao
    expect(resultado).toBe(5)
})

test("Deve subtrair dois numero", () => {
    // given - dado
    calc = new Calculadora()
    // when -- quando
    resultado = calc.subtrair(1,1)
    // then-- entao
    expect(resultado).toBe(0)
})

test("Deve multiplicar dois numero", () => {
    // given - dado
    calc = new Calculadora()
    // when -- quando
    resultado = calc.multiplicar(5,5)
    // then-- entao
    expect(resultado).toBe(25)
})

test("Deve dividir dois numero", () => {
    // given - dado
    calc = new Calculadora()
    // when -- quando
    resultado = calc.dividir(1,1)
    // then-- entao
    expect(resultado).toBe(1)
})