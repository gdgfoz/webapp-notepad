(function() {
  'use strict';

  angular
    .module('notepadDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
