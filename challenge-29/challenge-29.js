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

    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        var $formVehicle = new DOM('[data-js="form-insert-vehicle"]');
        $formVehicle.on('submit', this.handleFormVehicles);
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://raw.githubusercontent.com/RFormigao/curso-javascript-ninja/master/challenge-29/company.json');
        ajax.send();
        ajax.addEventListener('readystatechange',this.getInfoCompany, false);
      },

      getInfoCompany: function getInfoCompany() {
        if (app().isRequestOk.call(this)) {
          var data   =  JSON.parse(this.responseText);
          var $title = new DOM('[data-js="title"]');
          var $phone = new DOM('[data-js="number"]');
          $title.get()[0].textContent = data.name;
          $phone.get()[0].textContent = data.phone;
        }
      },

      isRequestOk: function isRequestOk() {
        return this.readyState === 4 && this.status === 200;
      },

      handleFormVehicles: function handleFormVehicles(event) {
        event.preventDefault();   
        var $formFields = new DOM('[data-js="input-field"]');        
        app().addVehicle.call($formFields);
        $formFields.methodArray('forEach', app().clearFields);     
      },

      addVehicle: function addVehicle() {
        var $tableBody   = new DOM('[data-js="table-body"]');     
        var lineTable    = doc.createElement("tr");
        var length       = this.get().length;
        
        for (let i = 0; i < length; i++) {
          var td = doc.createElement("td");
          td.appendChild( doc.createTextNode( this.get()[i].value ) );
          lineTable.appendChild( td );            
        }

        $tableBody.get()[0].appendChild(lineTable);   
      },
      
      clearFields: function clearFields(item) {
        item.value = '';
      }
    }
  }

  app().init();

})(window.DOM, document);
