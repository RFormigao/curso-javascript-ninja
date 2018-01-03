(function (win, doc) {

  'use strict';

  var $display = doc.querySelector( "[data-js='display']" );
  var $numbers = doc.querySelectorAll( "[data-js='numbers']" );
  var $clear = doc.querySelector( "[data-js='clear']" );
  var $operations = doc.querySelectorAll( "[data-js='operations']" );
  var $result = doc.querySelector( "[data-js='result']" );

  function initialize() {
    initEvents();
  }

  function initEvents() {
    $numbers.forEach( function (item) {
      item.addEventListener('click', handleClickNumber, false);
    });
    $operations.forEach( function (item) {
      item.addEventListener('click', handleClickOperation, false);
    });
    $result.addEventListener( 'click', calculate, false );
    $clear.addEventListener( 'click', clear, false );
  }

  function clear() {
    $display.value = 0;
  }

  function handleClickNumber() {
    return $display.value === '0' ? $display.value = this.value : $display.value += this.value;
  }

  function handleClickOperation() {
    var inputDisplay = $display.value.match(/\d+?|.+?[^+\-*÷\s+]/g).join('');
    return $display.value = inputDisplay + ' ' + this.value + ' ';
  }

  function lastItemItIsOper (string) {
    return string = string.match(/.+[^+*÷\-\s+]/g).toString().split(' ');
  }

  function calculate() {
    var inputDisplay = lastItemItIsOper($display.value);
    return $display.value = inputDisplay.reduce(calcOperation);
  }

  function calcOperation (acumulado, atual, index, array) {
    if ( atual === '+' )
      return Number( acumulado ) + Number( array[index + 1] );

    if ( atual === '-' )
      return Number( acumulado ) - Number( array[index + 1] );

    if ( atual === '*' )
      return Number( acumulado ) * Number( array[index + 1] );

    if ( atual === '÷' )
      return Number( acumulado ) / Number( array[index + 1] );

    return Number( acumulado );
  }

  initialize();

  })(window, document)
