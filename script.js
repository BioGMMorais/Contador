function contar() {
  var inicio = document.getElementById('txtin')
  var fim = document.getElementById('txtfim')
  var passos = document.getElementById('txtpas')
  var res = document.getElementById('res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    alert('[ERRO]Preencha os espaços vazios!')
  } else {
    res.innerHTML = 'Contando... <br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passos.value)

    if (p <= 0) {
      alert('Passo inválido! Considerando Passo = 1')
      p = 1
    }
    
    if (i < f) {
      // Contagem crescente
        for (var c = i; c <= f; c += p) {
          res.innerHTML += ` ${c} \u{1F449}`
        }
        // res.innerHTML += `\u{1f3c1}`
    } else {
      // Contagem regressiva
        for (var c = i; c >= f; c -= p) {
          res.innerHTML += ` ${c} \u{1f449}`
        }
        // res.innerHTML += `\u{1f3c1}`
    }
    res.innerHTML += `\u{1f3c1}`
  }
    
}