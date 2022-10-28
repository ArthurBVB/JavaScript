function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero = ''
        if(sex[0].checked){
            genero = 'Homem'
            if(idade<7){
                //bebe
               img.setAttribute('src', './imagens/bebemacho.jpg')
            }else if (idade<13){
                //crianca
                img.setAttribute('src', './imagens/crianca h 7-13.jpg')
            }else if(idade<17){
                //adolescente
                img.setAttribute('src', './imagens/aborrecente 13-17.jpg')
            }else if(idade<27){
                //homenzinho
                img.setAttribute('src', './imagens/homem 17-27.jpg')
            }else if(idade<40){
                //homem
                img.setAttribute('src', './imagens/homem 27-40.jpg')
            }else if(idade<60){
                //homem veio
                img.setAttribute('src', './imagens/homem 40-60.jpg')
            }else{
                //veio
                img.setAttribute('src', './imagens/veio 60+.jpg')
            }

        }else if(sex[1].checked){
            genero = 'Mulher'
            if(idade<7){
                //bebe
                img.setAttribute('src', './imagens/bebe mulher.jpg')

            }else if (idade<13){
                //crianca
                img.setAttribute('src', './imagens/crianca m 7-13.jpg')
            }else if(idade<17){
                //adolescente
                img.setAttribute('src', './imagens/adolecente m 13-17.jpg')
            }else if(idade<27){
                //mulher
                img.setAttribute('src', './imagens/mulher 17-27.jpg')
            }else if(idade<40){
                //mulher madura
                img.setAttribute('src', './imagens/mulher 27-40.jpg')
            }else if(idade<60){
                //mulher veia
                img.setAttribute('src', './imagens/mulher 40-60.jpg')
            }else{
                //veia
                img.setAttribute('src', './imagens/veia 60+.jpg')
            }
        }
        res.innerHTML = `Detectamos o genero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}