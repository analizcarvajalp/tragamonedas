
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    const card3 = document.getElementById('card3')
    const button = document.getElementsByTagName('button')
    const mensaje = document.getElementById('mensaje')
    let lista = ['1','2','3','4','5', '6', '7', '8', '9']
    let mensajes = ['Tú puedes', '¿Ya te rendiste?', 'Vuelve a intentarlo', 'Perdiste :(', 'la maquina te ganó', 'Tan cerca y tan lejos...']
    function cambiarNumero(){
        card1.innerHTML = lista[0]
        card2.innerHTML = lista[1]
        card3.innerHTML = lista[2]
    }
    
    cambiarNumero()
    function inicio(){

        let contador = 0;
        const intervalo = setInterval(function(){
            let listaGanador = ['1','1','1']
            let list = lista.sort(() =>Math.random() - 0.5 )
            let mensajesLista = mensajes.sort(() =>Math.random() - 0.5 )

           

        cambiarNumero()
        console.log(list)
        contador++
       
        if(contador === 3 && lista[0] === '3'){
        lista = listaGanador.slice(0)
        cambiarNumero()
        lista = ['1','2','3','4','5', '6', '7', '8', '9']
        mensaje.innerHTML = '¡¡Ganaste!!...Te invito unas cervezas'
        clearInterval(intervalo)
 
     
            }
        else if( contador === 3 && lista[0] !== '3'){
            
            clearInterval(intervalo)
            mensaje.innerHTML = mensajes[0]
        }
        

        },300)

    }