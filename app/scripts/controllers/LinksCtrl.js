'use strict';

/**
 * @ngdoc function
 * @name previewGruntApp.controller:SelectCtrl
 */

angular.module('previewGruntApp')
  .controller('LinksCtrl', function($scope) {
    $scope.links = [
      'http://www.google.co.uk',
      'http://mail.yahoo.com'
    ];
  });
