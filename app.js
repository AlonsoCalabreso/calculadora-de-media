const numero1 = document.getElementById("nota1")
const numero2 = document.getElementById("nota2") 
const numero3 = document.getElementById("nota3")
const numero4 = document.getElementById("nota4")
const numero5 = document.getElementById("nota5")
const numero6 = document.getElementById("nota6")
const button = document.getElementById("button")
const resultado = document.getElementById("resultado")

function calcularMedia(){
    const nota1 = Number(numero1.value)
    const nota2 = Number(numero2.value)  
    const nota3 = Number(numero3.value)
    const nota4 = Number(numero4.value)
    const nota5 = Number(numero5.value)
    const nota6 = Number(numero6.value)


    const media1 = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6)
    const media2 = (media1/6)

    resultado.innerHTML = `A média é ${media2.toFixed(2)}`
}

button.addEventListener("click", calcularMedia)