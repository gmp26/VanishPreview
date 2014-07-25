'use strict';

/**
 * @ngdoc overview
 * @name previewGruntApp
 * @description
 * # previewGruntApp
 *
 * Main module of the application.
 */
angular
    .module('previewGruntApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/main.html'
        }).
        when('/links', {
            templateUrl: 'views/links.html',
            controller: 'LinksCtrl' //is it needed?
        }).
        when('/levels', {
            templateUrl: 'views/levelSelect.html',
            controller: 'SelectCtrl'
        }).
        when('/levels/:levelId', {
            templateUrl: 'views/gameview.html',
            controller: 'GameCtrl'
            //levelId goes into $routeParams
        }).
        otherwise({
            redirectTo: '/'
        });
    });