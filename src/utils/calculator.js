const calculate = (a, b, op) => {
    switch (op) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            break;
    }
}

const somar = (a, b) => {
    return { valor: calculate(a, b, '+') }
}

const subtrair = (a, b) => {
    return { valor: calculate(a, b, '-') }
}

const multiplicar = (a, b) => {
    return { valor: calculate(a, b, '*') }
}

const dividir = (a, b) => {
    if (b === 0) {
        return {
            valor: undefined,
            error: 'Divisão por 0'
        }
    }
    return { valor: calculate(a, b, '/') }
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}