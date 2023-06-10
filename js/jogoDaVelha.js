
// declaração das variáveis
let tabuleiro
let board
let aviso
let jogador
let linha
let coluna

// Função de inicialização do jogo
function iniciar() {
    // Criação do tabuleiro como tabela
    tabuleiro = []
    board = document.getElementById('board')
    aviso = document.getElementById('aviso')
    jogador = 1

    // Criando uma matriz 3 por 3
    // Criar as linhas 
    for(let l=0; l<3; l++){
        tabuleiro[l] = []
        // criar as colunas
        for(let c=0; c<3; c++)
            tabuleiro[l][c] = 0

    }
    // Instancia a exibição no HTML
    console.table(tabuleiro)
    exibir()
}
 

// Mostra a exibição no HTML 
function exibir() {
    let tabela =  '<table cellpadding="10" border="1">'
     // Criar as linhas no HTML
    for(let l=0; l<3; l++){
        tabela += '<tr>'
            // criar as colunas no HTML
            for(let c=0; c<3; c++){
                // coloca marcador dentro do html
                switch (tabuleiro[l][c]) {
                    case -1: marcador = 'x'; break;
                    case 1: marcador = 'O'; break;
                    default: marcador = '_'
                }
                // Mostra o macador 'x' ou 'o' dentro do quandrado
                tabela += '<td>' + marcador + '</td>'
            }
        tabela += '</tr>'
    }
    // inserir dentro do HTML
    board.innerHTML = tabela
    
}



function jogar() {  
    // Avisa ao jogador caso ele digite um campo ja jogado
    aviso.innerHTML = 'Vez do jogador: ' + numeroJogador()

    // Pega o valor da linha e da coluna do html e subtrai 1 ao índice
    linha = document.getElementById('linha').value - 1
    coluna = document.getElementById('coluna').value - 1
    
    // Acrescenta ao matriz o numero 1 ou -1 para alternar entre os jogadores
    if( tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1
    }else{
        // Aviso no HTML do campo ja marcado 
        aviso.innerHTML = 'Esse campo ja foi marcado'
    }
    
    console.table(tabuleiro);
    console.log(jogador);
    // ajuda na altenancia dos jogadores
    jogador++
    // Efetiva a instancia de exibir
    exibir()
    // Chama a instancia de checar
    checar()
}



function checar() {
    // linhas
    for(let i=0; i<3; i++) {
        let soma = 0
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]
        
        if (soma == 3 || soma == -3){
            aviso.innerHTML = 'O Jogador ' + numeroJogador() + ' ganhou!'
        }
    }
    //coluna
    for(let i=0; i<3; i++) {
        let soma = 0
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i]
        
        if (soma == 3 || soma == -3){
            aviso.innerHTML = 'O Jogador ' + numeroJogador() + ' ganhou!'
        }
    }

    // digonais
    for(let i=0; i<3; i++) {
        let soma = 0
        soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2] 
        || tabuleiro[2][0] + tabuleiro[1][1] + tabuleiro[0][2]

        
        if (soma == 3 || soma == -3){
            aviso.innerHTML = 'O Jogador ' + numeroJogador() + ' ganhou!'
        }
    }
 
}

// Função de alternação entre o jogadores
function numeroJogador() {
    return jogador%2 + 1
}
