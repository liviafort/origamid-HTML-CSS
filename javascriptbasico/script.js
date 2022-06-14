function livro(nome, ano, autor){
  nome = nome.toUpperCase()
  return{
    nomeLivro: nome,
    totalLivro: 2022 - ano,
    fraseLivro: nome + ' por ' + autor
  };
}
var tudo = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')
console.log(tudo)




