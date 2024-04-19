function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //'fano' é formulário ano
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) { 
                //criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 21) { 
                //adolescente
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) { 
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else { 
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) { 
                //criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 21) { 
                //adolescente
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) { 
                //adulta
                img.setAttribute('src', 'mulheradulta.png')
            } else { 
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}