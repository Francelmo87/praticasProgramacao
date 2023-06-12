function alterarQtd(produto, acao) {
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)
    
    if(acao == '-' && qtd.innerHTML == 0){
        alert('Ateção! A Quantidade não pode ser menor que 0')

    }else{
        acao == '+' ? qtd.innerHTML ++ : qtd.innerHTML -- 
        total.innerHTML = formatarValor(qtd.innerHTML * somenteNumeros(valor.innerHTML))
        // instaciar a função soma
        soma()
    }
// mostra no console
console.log(qtd.innerHTML)
}

// não esquecer de chamar na função principal
function soma(){
    let soma = 0 
    for (let i = 1; i < 4; i++){
        soma += Number(somenteNumeros(document.getElementById('total_'+ i).innerHTML ))
    } 
    
    document.getElementById('subtotal').innerHTML = formatarValor(soma)
}

// Tudo que não for numero é substitui por vazio
function somenteNumeros(n){
    return n.replace(/\D/g, '')    
}
// para recolocar alguma estring na var no caso aqui 'R$' e 
// transformar para o  padrão brasileiro
function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-BR')
}