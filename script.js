var app = angular.module("redditApp", []);

app.controller("getInfoController", function($scope, $http){
	var url = "https://www.reddit.com/r/aww/.json";
	$http.get(url).then(function(responseBody){
		$scope.posts = responseBody.data.data.children;
	});
	$scope.posts = $http.get(url);
});
