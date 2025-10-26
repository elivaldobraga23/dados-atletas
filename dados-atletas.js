class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }

  calcularCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil"
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil"
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário"
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto"
    } else {
      return "Sem categoria"
    }
  }

  calcularIMC() {

    return this.peso / (this.altura * this.altura)
  }

  calcularMediaValida() {

    let notas = [...this.notas]

    
    notas.splice(notas.indexOf(Math.max(...notas)), 1)

    
    notas.splice(notas.indexOf(Math.min(...notas)), 1)

    let quantidadeNotas = notas.length
    let soma = notas.reduce((ac, nota) => ac + nota, 0)
    let media = soma / quantidadeNotas

    return media

  }


  obterNomeAtleta() {
    return `Nome: ${this.nome}`
  }

  obterIdadeAtleta() {
    return `Idade: ${this.idade}`
  }

  obterPesoAtleta() {
    return `Peso: ${this.peso}`
  }

  obterAlturaAtleta() {
    return `Altura: ${this.altura}`
    
  }

  obterNotasAtleta() {
    return `Notas: ${this.notas.join(", ")}`
    
  }
  obterCategoria() {
    return `Categoria: ${this.calcularCategoria()}`
  }

  obterIMC() {
    return `IMC: ${this.calcularIMC()}`
    
  }

  obterMediaValida() {
    return `Média válida: ${this.calcularMediaValida()}`
    
  }

}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obterNomeAtleta())
console.log(atleta.obterIdadeAtleta())
console.log(atleta.obterPesoAtleta())
console.log(atleta.obterAlturaAtleta())
console.log(atleta.obterNotasAtleta())
console.log(atleta.obterCategoria())
console.log(atleta.obterIMC())
console.log(atleta.obterMediaValida())