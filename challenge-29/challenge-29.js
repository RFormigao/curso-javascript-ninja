(function(DOM, doc) {

  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {

    var $formVehicle = new DOM('[data-js="form-insert-vehicle"]');
    var $formFields  = new DOM('[data-js="input-field"]');
    var $tableBody   = new DOM('[data-js="table-body"]');
    var $title       = new DOM('[data-js="title"]');
    var $phone       = new DOM('[data-js="number"]');
    var ajax         = new XMLHttpRequest();
    var lineTable    = '';
    var testUrl      = /(?:http(?:s):\/\/w{3}\.?\w+\.\w{2,3}(?:\.\w{2})?)\/.+/g;

    $formVehicle.on('submit', addVehicle);

    function addVehicle(event) {
      event.preventDefault();
      if ( verifyFields() ) {
        handleFormVehicles();
        $formFields.methodArray('forEach', clearFields);
      }
    }

    function verifyFields() {
      if ( !$formFields.get()[0].value.match(testUrl) ) {
        alert( 'Preencha com a URL de uma imagem' );
        return false;
      }

      if ( $formFields.get()[1].value === '' ) {
        alert( 'Preencha a marca / modelo do veiculo' );
        return false;
      }

      if ( $formFields.get()[2].value === '' ) {
        alert( 'Preencha o ano do veiculo ' );
        return false;
      }

      if ( $formFields.get()[3].value === '' ) {
        alert( 'Preencha a placa do veiculo' );
        return false;
      }

      if ( $formFields.get()[4].value === '' ) {
        alert( 'Preencha a cor do veiculo' );
        return false;
      }

      alert ( 'Veiculo cadastrado com sucesso' );
      return true;

    }

    function handleFormVehicles() {
      lineTable = doc.createElement("tr");
      $formFields.methodArray('forEach', handleFields);
      $tableBody.get()[0].appendChild(lineTable);
    }

    function handleFields(item) {
      var td = doc.createElement("td");
      td.appendChild( doc.createTextNode( item.value ) );
      lineTable.appendChild( td );
    }

    function clearFields(item) {
      item.value = '';
    }

    function pullCompany() {
      ajax.open('GET', 'https://raw.githubusercontent.com/RFormigao/curso-javascript-ninja/master/challenge-29/company.json');
      ajax.send();
      ajax.addEventListener('readystatechange',handleReadyStateChange, false);
    }

    function handleReadyStateChange() {
      if (isRequestOk()) {
        var data =  JSON.parse(ajax.responseText);
        $title.get()[0].textContent = data.name;
        $phone.get()[0].textContent = data.phone;
      }
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function init() {
      pullCompany();
    }

    return init();
  }

  app();

})(window.DOM, document);
