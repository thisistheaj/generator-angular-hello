(function () {
    'use strict';

    angular.module('app.service').factory('Service', Service);

    function Service() {
        //public
        var service = {
            get: get
        };

        //private
        var data = {
            name: "World"
        };

        function get() {
            return data;
        }

        return service;
    }

})();
