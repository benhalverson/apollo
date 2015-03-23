var app = angular.module('dailyjobsapp' ['angular-route'])
	.config(function ($routeProvider){
			$routeProvider
					.when('/posts', {
						templateUrl: './public/posts.html',
						controller: 'PostsCtrl'
					})
		});
