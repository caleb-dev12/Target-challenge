// questão 1
let i = 13;
let soma = 0;
let k = 0;

while (k < i) {
    k = k + 1;
    soma = soma + k;
} 

console.log(soma)

// questão 2
function isFibonacciNumber(number) {
    let a = 0;
    let b = 1;

    while (b <= number) {
        if (b === number) {
            return true;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }

    return false;
}

// Solicitar entrada do usuário (você pode modificar isso conforme necessário)
const userInput = prompt("Digite um número para verificar se pertence à sequência de Fibonacci:");

// Converter a entrada para número
const userNumber = parseInt(userInput);

// Verificar se o número pertence à sequência de Fibonacci
if (isNaN(userNumber)) {
    console.log("Por favor, digite um número válido.");
} else {
    const result = isFibonacciNumber(userNumber);
    if (result) {
        console.log(`${userNumber} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${userNumber} não pertence à sequência de Fibonacci.`);
    }
}

// questão 3


    // a) 1, 3, 5, 7, _9_  

    // b) 2, 4, 8, 16, 32, 64, _128_  

    // c) 0, 1, 4, 9, 16, 25, 36, __49__  

    // d) 4, 16, 36, 64, _100_  

    // e) 1, 1, 2, 3, 5, 8, __13__  

    // f) 2,10, 12, 16, 17, 18, 19, _20_  

// questão 4
    // Primeira visita à sala:
    // Ligue o primeiro interruptor e aguarde alguns minutos.
    // Desligue o primeiro interruptor e ligue o segundo interruptor.
    // Deixe o terceiro interruptor desligado.

    // Agora, existem três possíveis cenários:
    // Se a lâmpada estiver acesa, então o segundo interruptor controla essa lâmpada.
    // Se a lâmpada estiver apagada e ainda estiver fria, então o primeiro interruptor controla essa lâmpada.
    // Se a lâmpada estiver apagada, mas estiver quente, então o terceiro interruptor controla essa lâmpada.

    // Segunda visita à sala:
    // Ligue o terceiro interruptor e entre na sala.

    // Agora, há duas possibilidades:
    // Se a lâmpada estiver acesa, então o terceiro interruptor controla essa lâmpada.
    // Se a lâmpada estiver apagada, você sabe que o primeiro interruptor controla essa lâmpada.

// questão 5
function inverterString(str) {
    let stringInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// Exemplo de uso
const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);

console.log(`String original: ${minhaString}`);
console.log(`String invertida: ${stringInvertida}`);
