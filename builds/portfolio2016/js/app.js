'use strict';
angular.module('portfolio', ['ui.router', 'ui.bootstrap'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				views: {
					'header': {
						templateUrl: 'views/header.html',
						controller: 'NavController'
					},
					'content': {
						templateUrl: 'views/portfolio.html',
						controller: 'PortfolioController'
					},
					'footer': {
						templateUrl: 'views/footer.html'
					}
				}
			})
			.state('home.itemDetails', {
				url: 'item/:id',
				views: {
					'content@': {
						templateUrl: 'views/itemdetail.html',
						controller: 'ItemDetailsController'
					}
				}
			})
			.state('home.about', {
				url: 'about',
				views: {
					'content@': {
						templateUrl: 'views/about.html'
					}
				}
			});
			$urlRouterProvider.otherwise('/');
	});