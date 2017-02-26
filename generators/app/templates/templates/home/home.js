(function () {
    'use strict';

    angular.module('app.controllers').controller('HomeCtrl', ['$scope','Service', HomeCtrl]);

    function HomeCtrl($scope,Service) {
        $scope.data = Service.get();
    }

})();

