/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ["Robson", true, NaN, false, 20];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(param) {
    return param;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function TwoNumbers(x, y) {
  return console.log(x[y]);
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var array2 = ["Robson", 18, 55.5, {a: "corinthiano", b: "sistemas"}, function () {}, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
TwoNumbers(array2, 0);
TwoNumbers(array2, 1);
TwoNumbers(array2, 2);
TwoNumbers(array2, 3);
TwoNumbers(array2, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// 
function book(name) {

  var allBooks = {
    'Javascript básico': {
      quantidadePaginas: 100,
      autor: 'John Berry',
      editora: 'Home Code'
    },
    'Javascript intermediario': {
      quantidadePaginas: 150,
      autor: 'Robert Gancho',
      editora: 'Home Code'
    },
    'Javascript avançado': {
      quantidadePaginas: 500,
      autor: 'Felipe Nemesis',
      editora: 'Home Code'
    }
  };

  return !name ? allBooks : allBooks[name];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nameBook = "Javascript avançado";
console.log("O livro " + nameBook + " tem " + book(nameBook).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + nameBook + " é " + book(nameBook).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nameBook + " foi publicado pela editora " + book(nameBook).editora + ".");