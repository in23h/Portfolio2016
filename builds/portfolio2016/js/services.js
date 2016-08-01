angular.module('portfolio')
	.factory('portfolioFactory', ['$http', function($http){
		return {
			getPortfolioList: function(callback){
			
				$http.get('js/data.json').success(callback);
			},
			getPortfolioItem: function(params, callback){

				$http.get('js/'+params+'.json').success(callback);
			}
		};
	}]);