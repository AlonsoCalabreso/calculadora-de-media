const numero1 = document.getElementById("nota1")
const numero2 = document.getElementById("nota2")
const button = document.getElementById("button")

function calcularMedia(){
    const nota1 = Number(numero1.value)
    const nota2 = Number(numero2.value)

    const media = (nota1 + nota2)/2

    console.log(media)
}

button.addEventListener("click", calcularMedia)