class ValorLivro{
  constructor(preco){
    this.preco = preco
  }
}

class Livro{
  constructor(titulo, genero, autor, id = {}){
    this.titulo = titulo
    this.genero = genero
    this.autor = autor
    this.id = id
  }
}

let livro = new Livro('O fantasma da ópera','terror','Gaston Leroux', '01', {valorlivro: new ValorLivro('R$20,00') })

console.log(livro)