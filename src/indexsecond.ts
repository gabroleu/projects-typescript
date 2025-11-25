// funções:

function soma(a: number, b: number): number {
    return a + b;
}


// arrow function

const cumprimentar = (nome: string): string => {
    return `Olá, ${nome}!`;
}

console.log(soma(6, 9));
console.log(cumprimentar("Gabriel"));

const cumprimentar2 = (nome: string): void => {
    console.log(`Olá, ${nome}!`);
}

cumprimentar2("Gabroleu");