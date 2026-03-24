"use scrict"

function criarListaNumeros(quantidade){
    let listaNumero = []

    for (let cont = 1; cont <= quantidade; cont++){
        listaNumero.push(cont)
    }
    return listaNumero
}

function criarListaPares(quantidade){
    let listaPares = []

    for(let cont = 1; cont <= quantidade; cont++){
        let par = cont * 2
        listaPares.push(par)
    }
    return listaPares
}

function criarListaImpares(quantidade){
    let listaImpar = []

    for( let cont = 1;cont <= quantidade;cont++){
        let impar = cont * 2 - 1
        listaImpar.push(impar)
    }
    return listaImpar
}

function criarListaMultis(quantidade){
    let listaMultiplos = []

    for (let cont = 1; cont <= quantidade; cont++){
        let multiplo = cont * 5

        listaMultiplos.push(multiplo)
    }
    return listaMultiplos
}

function criarListaPotencia(quantidade){
    let listaPotencia = []

    for (let cont = 0; cont <= quantidade; cont++){
        let potencia = 2 ** cont

        listaPotencia.push(potencia)
    }
    return listaPotencia
}

console.log(criarListaPotencia(3))

function criarLinha (numero,par,impar,multiplo,potencia){

    const tbody = document.getElementById("tbody")
    const tr = document.createElement("tr")
    const tdNum = document.createElement("td")
    tdNum.textContent = numero

    const tdPar = document.createElement("td")
    tdPar.textContent = par

    const tdImpar = document.createElement("td")
    tdImpar.textContent = impar

    const tdMult = document.createElement("td")
    tdMult.textContent = multiplo

    const tdPotencia = document.createElement("td")
    tdPotencia.textContent = potencia

    tr.replaceChildren(tdNum, par, tdImpar, tdMult, tdPotencia)
    tbody.appendChild(tr)
}

function handleClick (){
    const quantidade = Number(document.getElementById("quantidade").value)
    const listaNumeros = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpa = criarListaImpares(quantidade)
    const listaMultiplos = criarListaMultis(quantidade)
    const listaPotenciaa = criarListaPotencia(quantidade)

    document.getElementById("tbody").replaceChildren()
    
    for(let cont = 0; cont < quantidade; cont++){
        criarLinha(listaNumeros[cont],listaPares[cont],listaImpa[cont], listaMultiplos[cont],listaPotenciaa[cont])
    }
}