# Projeto 2 - Dados dos Atletas

Este é o **Segundo Projeto de Certificação** do curso **Dev Start** do SENAI Santa Catarina. O objetivo deste projeto é criar uma aplicação em **JavaScript** capaz de receber informações de atletas, calcular parâmetros importantes e exibi-los de forma organizada.

---

## Funcionalidades

A aplicação permite:

- Cadastrar informações de um atleta:
  - Nome
  - Idade
  - Peso
  - Altura
  - Notas (array de 5 valores)
- Calcular e exibir:
  - Categoria do atleta (Infantil, Juvenil, Intermediário, Adulto ou Sem categoria)
  - IMC (Índice de Massa Corporal)
  - Média válida das notas (desconsiderando a maior e a menor nota)
- Exibir todos os dados do atleta de forma organizada.

---

## Regras do Projeto

### Categoria
- Infantil: 9 a 11 anos  
- Juvenil: 12 a 13 anos  
- Intermediário: 14 a 15 anos  
- Adulto: 16 a 30 anos  
- Sem categoria: demais idades

### IMC
Cálculo realizado pela fórmula:  
```

IMC = peso / (altura * altura)

````

### Média válida
- Considera as 5 notas do atleta.
- Remove a **maior** e a **menor** nota.
- Calcula a média das notas restantes.

---

## Exemplo de Uso

```javascript
const atleta = new Atleta(
  "Cesar Abascal", 
  30, 
  80, 
  1.70, 
  [10, 9.34, 8.42, 10, 7.88]
);

console.log(atleta.obterNomeAtleta());
console.log(atleta.obterIdadeAtleta());
console.log(atleta.obterPesoAtleta());
console.log(atleta.obterAlturaAtleta());
console.log(atleta.obterNotasAtleta());
console.log(atleta.obterCategoria());
console.log(atleta.obterIMC());
console.log(atleta.obterMediaValida());
````

**Saída esperada:**

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.25
```

---

## Tecnologias Utilizadas

* JavaScript (ES6)
* Node.js (opcional para execução no terminal)
* Conceitos de Programação Orientada a Objetos (POO)

---

## Autor

**Elisvaldo Braga** – Curso Dev Start – SENAI Santa Catarina


