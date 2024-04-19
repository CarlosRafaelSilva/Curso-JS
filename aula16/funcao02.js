function soma(n1=0, n2=0) {  //esse "=0" é um parâmetro pré-definido, ou seja, se o n1 (ou n2) não for declarado, é 0
    return n1 + n2            //assim, ele exibe apenas o que foi declarado, do contrário, o js vai identificar um erro:'NaN'
  
}

console.log(soma(5, 6))