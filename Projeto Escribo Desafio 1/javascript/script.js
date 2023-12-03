function somarmult() {
    let numero = parseInt(document.getElementById("numero").value)
    let somatorio = 0;
    
  
    for (let a= 1; a < numero; a++) {
      if (a % 3 === 0 || a % 5 === 0) {
        somatorio += a;
        
      }
    }
  
    document.getElementById("Somatotal").innerText = `A soma dos seus divisores 3 e 5 é : ${somatorio}`

  
    if (numero < 0 || numero === parseFloat )
    alert ("Digite um umero positivo")
    return
  }

  function limparCampo() {
    document.getElementById("numero").value = '';
}