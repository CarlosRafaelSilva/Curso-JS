function contar() {
    var ini = document.getElementById('txti') //ou let ini = document....
    var fim = document.getElementById('txtf') //ou let fim = docum.......
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
      res.innerHTML = 'Contando: '
      let i = Number(ini.value)  
      let f = Number(fim.value)
      let p = Number(passo.value)
      if (p <= 0) {
        window.alert('Passo Inválido! Considerando PASSO 1')
        p = 1
      }

      if ( i < f) {
        //contagem crescente
          for(let c = i; c <= f; c += p) {
              res.innerHTML += ` ${c} \u{1F449}`
          }
      } else {
        //contagem regressiva
          for(let c = i; c >= f; c -= p) {
              res.innerHTML += ` ${c} \u{1F448}`
          }
      }
      res.innerHTML += `\u{1F3C1}`
    }
}