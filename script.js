
document.getElementById('it').style.display = "none"

// Essa linha de código está adicionando um evento de escuta (listener)
// ao elemento do HTML que tem o ID "formulario". Quando o evento "submit"
// for acionado nesse formulário (por exemplo, quando o usuário clicar no
// botão de envio), a função "calcular" será executada.

document.getElementById('formulario').addEventListener('submit', calcular)

// O parâmetro event representa o objeto do evento que está sendo acionado no
// momento da execução da função calcular. Quando um evento é disparado (por exemplo,
// um clique de mouse ou envio de formulário), um objeto Event é criado pelo navegador e passado como argumento para a função de tratamento de eventos.

function calcular(event){
    
    // A chamada event.preventDefault() é usada para evitar que a página seja recarregada. Isso permite que o código personalizado manipule os dados do
    // formulário, faça os cálculos necessários e atualize a página dinamicamente sem recarregar a página inteira.

    event.preventDefault()

    var peso = document.querySelector("#pes").value
    var altura = document.querySelector("#alt").value
    console.log(peso, altura)
     
     var resultado = peso/(altura*altura)
     resultado = resultado.toFixed(2);
     console.log(resultado)
     
    if(resultado < 15){  
        var msg ='Extremamente abaixo do peso'
        // console.log(msg)
        document.getElementById('final').innerHTML = msg
        document.getElementById('valor').innerHTML = resultado
     }
    else if((resultado >= 15) && (resultado < 16)){  
        var msg = 'Gravemente abaixo do peso'
        
        document.getElementById('final').innerHTML = msg
        document.getElementById('valor').innerHTML = resultado
     }
    else if((resultado >= 16) && (resultado < 18.5)){  
        var msg = 'Abaixo do peso ideal'
        
        document.getElementById('final').innerHTML = msg
        document.getElementById('valor').innerHTML = resultado
     }
    else if((resultado >= 18) && (resultado < 25)){  
        var msg = 'Faixa de peso ideal'
        
        document.getElementById('final').innerHTML = msg
        document.getElementById('valor').innerHTML = resultado
     }
    else if((resultado >= 25) && (resultado < 30)){  
        var msg = 'Sobrepeso'
        
        document.getElementById('final').innerHTML = msg
        document.getElementById('valor').innerHTML = resultado
     }
    else if((resultado >= 30) && (resultado < 35)){  
        var msg = 'Obesidade grau I'
        
        document.getElementById('final').innerHTML = msg
        document.getElementById('valor').innerHTML = resultado
     }
    else if((resultado >= 35) && (resultado < 40)){  
        var msg = 'Obesidade grau II (grave)'
        
        document.getElementById('final').innerHTML = msg
        document.getElementById('valor').innerHTML = resultado
     }
    else if(resultado >= 40){  
        var msg = 'Obesidade grau III (mórbida)'
        
        document.getElementById('final').innerHTML = msg
        document.getElementById('valor').innerHTML = resultado
     }
     
document.getElementById('it').style.display = "block"
 
}