class Endereco {
  constructor(CEP, Rua) {
    this.CEP = CEP
    this.Rua = Rua
  }
}

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

class PessoaBuilder {
  constructor(nome) {
    this.Pessoa = new Pessoa(nome)
  }

  setEndereco(Endereco) {
    this.Pessoa.Endereco = Endereco
    return this
  }

  build() {
    return this.Pessoa
  }
}

const builder = new PessoaBuilder('Adson')
const PessoaEndereco = builder.setEndereco(new Endereco('55000-000', 'Rua IFPE Campus Garanhuns')).build()

console.log(PessoaEndereco)