class calcula {
    constructor(numero,valor,enviar){
        this.numero = numero
        this.valor = valor
        this.enviar = enviar
        this.a = document.getElementById('a').value;
        this.b = document.getElementById('b').value;
        this.r = document.getElementById('r').value;
    }
    
            numero(){
                const a = document.getElementById('a').value;
                const b = document.getElementById('b').value;
                const r = document.getElementById('r').value;
            
        }

        Enviar(){
            function Enviar(){
                let a = document.getElementById("a").value;
                let b = document.getElementById("b").value;
                let x = parseInt(a) / parseInt(b)
                
                document.getElementById("r").value = x
                alert('Seu calculo foi realizado')
            }
        }

        
}

