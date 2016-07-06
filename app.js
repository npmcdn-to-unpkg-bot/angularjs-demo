var mc_app = angular.module('mc-app',[]);
mc_app.controller('mc-my-ctr',function($scope){
	$scope.first_name = 'shi';
	$scope.send_name = 'zhongliang';
});
angular.bootstrap(document.getElementById('mc-app'),['mc-app']);
var expression_number = angular.module('expression_number',[]);

