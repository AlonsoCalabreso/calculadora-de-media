const numero1 = document.getElementById("nota1")
const numero2 = document.getElementById("nota2")
const button = document.getElementById("button")
const resultado = document.getElementById("resultado")

function calcularMedia(){
    const nota1 = Number(numero1.value)
    const nota2 = Number(numero2.value)

    const media = (nota1 + nota2)/2

    resultado.innerHTML = `A média é ${media.toFixed(2)}`
}

button.addEventListener("click", calcularMedia)