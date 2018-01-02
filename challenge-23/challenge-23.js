(function (win, doc) {

  'use strict';

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  // Elements
  var $display = doc.querySelector( "[data-js='display']" );
  var $numbers = doc.querySelectorAll( "[data-js='numbers']" );
  var $clear = doc.querySelector( "[data-js='clear']" );
  var $operations = doc.querySelectorAll( "[data-js='operations']" );
  var $result = doc.querySelector( "[data-js='result']" );

  $numbers.forEach( function (item){
    item.addEventListener('click', thisClick, false);
  });
  $operations.forEach( function (item){
    item.addEventListener('click', thisOperation, false);
  });
  $result.addEventListener( 'click', result, false );
  $clear.addEventListener( 'click', clear, false );

  function thisClick() {
    return $display.value === '0' ? $display.value =  this.value : $display.value += this.value;
  }

  function thisOperation() {
    var regex = $display.value.match(/\d+|.+[^+\-*÷\s+]/g);
    return $display.value = regex + ' ' + this.value + ' ';
  }

  function result() {
    var arr = $display.value.split(' ');
    return $display.value = arr.reduce(function (acumulado, atual, index, array) {

      if ( atual === '+' )
        return Number( acumulado ) + Number( array[index + 1] );

      if ( atual === '-' )
        return Number( acumulado ) - Number( array[index + 1] );

      if ( atual === '*' )
        return Number( acumulado ) * Number( array[index + 1] );

      if ( atual === '÷' )
        return Number( acumulado ) / Number( array[index + 1] );

      return Number( acumulado );
    });

  };

  function clear() {
    $display.value = 0;
  }

})(window, document)
