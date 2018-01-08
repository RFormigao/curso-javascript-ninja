(function(DOM, doc) {

  'use strict';

  function app() {

    var $formVehicle = new DOM('[data-js="form-insert-vehicle"]');
    var $formFields  = new DOM('[data-js="input-field"]');
    var $tableBody   = new DOM('[data-js="table-body"]');
    var ajax         = new XMLHttpRequest();
    var lineTable    = '';

    var $title = new DOM('[data-js="title"]');
    var $phone = new DOM('[data-js="number"]');

    $formVehicle.on('submit', addVehicle);

    function addVehicle(event) {
      event.preventDefault();
      handleFormVehicles();
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

    function pullCompany() {
      ajax.open('GET', 'https://raw.githubusercontent.com/RFormigao/curso-javascript-ninja/master/challenge-29/company.json');
      ajax.send();
      ajax.addEventListener('readystatechange',handleReadyStateChange, false);
    }

    function handleReadyStateChange() {
      if (isRequestOk()) {
        var data = parseData();
        $title.get()[0].textContent = data.name;
        $phone.get()[0].textContent = data.phone;
      }
    }

    function parseData() {
      return JSON.parse(ajax.responseText);
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function init() {
      console.log('iniciou');
      pullCompany();
    }

    return init();

  }

  app();

})(window.DOM, document);
