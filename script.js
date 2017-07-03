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
			var shw = $scope.display;
			/* if (shw.indexOf('.') > -1 ){
				
			}else{ } */
			if(shw.length == 0){
				$scope.display = "0.";
			}else{
				$scope.display = shw + '.';
			}
		};


		$scope.clearScreen = function(){
				$scope.display = "";
		};
		
		
		
		$scope.DoInverse = function(){
			var shw = $scope.display;
			$scope.display = 1/shw;
		};
		
		
		
		$scope.ToggleSign = function(){
			var shw = $scope.display;
			var ridi =shw.length - 1;
			if (shw.length > 0){
			
			if (shw.indexOf('-') == -1){
				$scope.display = "-" + shw;
			}else if(shw.indexOf('-') == 0){
				$scope.display = shw.substring(1);
			}else{
				$scope.display = shw;
			}
		};
				
			};

		});