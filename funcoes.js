function somar(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    const soma = n1 + n2
    document.getElementById("resultado").innerHTML = 'O Resultado é ' + soma
}

function subtrair(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    const subtracao = n1 - n2
    document.getElementById("resultado").innerHTML = 'O Resultado é ' + subtracao
}

function multiplicar(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    const multiplicacao = n1 * n2
    document.getElementById("resultado").innerHTML = 'O Resultado é ' + multiplicacao
}

function dividir(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    const divisao = n1 / n2
    document.getElementById("resultado").innerHTML = 'O Resultado é ' + divisao
}

function resto(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)

    const resto = n1 % n2
    document.getElementById("resultado").innerHTML = 'O Resultado é ' + resto
}