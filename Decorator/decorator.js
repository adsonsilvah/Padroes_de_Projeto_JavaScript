
let AreaRetangulo = (lado, altura) => {
    return lado * altura;
}


const verificaOsValores = (fn) => {
    return (...params) => {
        console.log('Verifica os lados')
        if (params.length !== fn.length) {
            throw new Error(`Numeros de lados errado para ${fn.name}`);
        }
        return fn(...params);
    }
}


const PedeInteiros = (fn) => {
    return (...params) => {
        console.log('Pede números inteiros')
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new TypeError(`Numeros devem ser inteiros`);
            }
        });
        return fn(...params);
    }
}


AreaRetangulo = verificaOsValores(AreaRetangulo);

AreaRetangulo = PedeInteiros(AreaRetangulo);

console.log(AreaRetangulo(25, 35)); 