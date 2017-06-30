var app = angular.module("calc", []);

		app.controller("appController", function($scope){
			$scope.display = "";

			$scope.nums = function(num){
				$scope.display += num;
		};

		$scope.equal = function(){
				$scope.display = eval($scope.display);
		};

		$scope.del = function(){
			var shw = $scope.display;
			epp = shw.length;
			a = epp - 1;
				$scope.display = shw.substring(0,a);
		};

		$scope.ruth = function(){
			var shw = $scope.display;
				$scope.display = Math.sqrt(shw);
		};

		$scope.sqre = function(){
			var shw = $scope.display;
				$scope.display = Math.pow(shw,2);
		};

		$scope.Dot = function(){
			$scope.display = $scope.display + '.';
		};

		$scope.clearScreen = function(){
				$scope.display = "";
		};

		});