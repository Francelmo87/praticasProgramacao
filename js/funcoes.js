function somar(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)

    const soma = n1 + n2

    document.getElementById('resultado').innerHTML = 'O Resultado é: ' + soma
  }

  function subtrair(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)

    const subtrair = n1 - n2

    document.getElementById('resultado').innerHTML = 'O Resultado é: ' + subtrair
  }

  function multiplicar(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)

    const multiplicar = n1 * n2

    document.getElementById('resultado').innerHTML = 'O Resultado é: ' + multiplicar

  }

  function dividir(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)

    const divisao = n1 / n2

    document.getElementById('resultado').innerHTML = 'O Resultado é: ' + divisao

  }