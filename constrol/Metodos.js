class calcula {
    constructor(numero,valor){
        this.numero = numero
        this.valor = valor
    }

    Cacular(){
        this.numero = Number(this.numero)
        this.valor = Number(this.valor) 
        const value = document.getElementById("r").value = this.numero / this.valor
        alert('Seu calculo foi realizado')
    }

}

function enviar(){
    let x = document.getElementById("a").value
    let y = document.getElementById("b").value
    const calculo = new calcula(x, y)
    console.log("enviado");
    calculo.Cacular()
} 



function limpar(){
    let x = document.getElementById("a").value = ("")
    let y = document.getElementById("b").value = ("")
    const value = document.getElementById("r").value = ("")
    console.log("Limpo");
    x = (" ")
    y = (" ")
}