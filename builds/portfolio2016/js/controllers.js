angular.module('portfolio')
	.controller('NavController', ['$scope', function($scope) {
		$scope.toggleNav = function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		};
	}])
	.controller('PortfolioController', ['$scope', 'portfolioFactory', function($scope, portfolioFactory){
		portfolioFactory.getPortfolioList(function(portfolio) {
			$scope.portfolio = portfolio;

		});
	}])
	.controller('ItemDetailsController', ['$scope', '$stateParams', '$uibModal', 'portfolioFactory', function($scope, $stateParams, $uibModal, portfolioFactory){
		portfolioFactory.getPortfolioItem($stateParams.id, function(portfolioItem) {
			$scope.portfolioItem = portfolioItem[0];
			
			//$scope.selected = $scope.portfolioItem.content[0];
			$scope.open = function(index){
				$scope.selected = $scope.portfolioItem.content[index];
				
				var uibModalInstance = $uibModal.open({
					animation: true,
					size: 'lg',
					templateUrl: '../views/modal.html',
					controller: 'ModalCtrl',
					
					resolve: {
						selected: function () {
							return $scope.selected;
						},
						portfolio: function () {
							return $scope.portfolioItem.content;
						},
						index: function () {
							return index;
						}
					}
				});
			};
		});
		//$scope.item = portfolioFactory.getPortfolioItem($stateParams.id,10);
		//$scope.contentItem = portfolioFactory.getPortfolioContentItem($stateParams.id,$stateParams.contentId,10);
	}])
	.controller('ModalCtrl', ['$scope', '$uibModalInstance', 'selected', 'portfolio', 'index', function ($scope, $uibModalInstance, selected, portfolio, index) {
		$scope.selected = selected;
		$scope.portfolio = portfolio;
		$scope.index = index;
		$scope.close = function() {
			$uibModalInstance.close();
		};

		$scope.next = function() {
			
			if(index == $scope.portfolio.length-1) {
				index = 0;
			} else {
				index++;
			}
			
			$scope.selected = $scope.portfolio[index];
		};

		$scope.prev = function() {
			
			if(index == 0) {
				index = $scope.portfolio.length-1;
			} else {
				index--;
			}
			
			$scope.selected = $scope.portfolio[index];
		};

	}]);