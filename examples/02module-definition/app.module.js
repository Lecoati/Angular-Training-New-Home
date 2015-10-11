(function() {
    'use strict';

    angular
        .module('app', [])
        .config(configBlock)
        .run(runBlock);

    function configBlock() {
        // Aquí se pueden hacer distintos tipos de configuraciones
        // globales para toda la aplicación/modulo.
        // Ejemplo: rutas, key de una api...
    }

    function runBlock() {
        // Podemos decir que este es el método main()
        // va ser siempre lo primero que se va ejecutar
        // después del bloque de configuración.
    }

})();
