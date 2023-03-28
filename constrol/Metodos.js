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
    
    
    
limpeza(){
    this.numero = Number(this.numero)
    this.valor = Number(this.valor)
    this.numero = ("")
    this.valor = ("")
    alert("Tudo foi limpo")
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
    let x = document.getElementById("a").value
    let y = document.getElementById("b").value
    const limpeza = new limpar(x,y)
    console.log("Limpo");
    x = (" ")
    y = (" ")
}