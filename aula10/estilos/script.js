function carregar(){
    var msg = window.document.getElementById('hora')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora < 6){
        //madrugada
        document.body.style.background = '#0f1211'
        foto.style.backgroundImage = "url(./imagens/madruga.jpg)"
    }else if(hora < 12 ){
        //bom dia
        document.body.style.background = '#532900'
    }else if(hora < 13){
        //almoço
        document.body.style.background = '#c95605'
        foto.style.backgroundImage = 'url(./imagens/almoco.jpg)'
    }else if(hora < 18){
        //tarde
        document.body.style.background = '#e2cd9f'
        foto.style.backgroundImage = "url(./imagens/tarde.jpg)"
    } else{
        //noite
        document.body.style.background = '#1c2b33'
        foto.style.backgroundImage = 'url(./imagens/noite.jpg)'
    } 
}