/**
 * Created by sboyapati on 2/27/16.
 */

var myApp = angular.module('myApp', ['ui.router']);


myApp.config(function ($stateProvider, $urlRouterProvider) {
	//
	$urlRouterProvider.otherwise("/home");
	//
	$stateProvider
					.state('home', {
						url: "/home",
						templateUrl: "partials/home.html"
					})

					.state('about', {
						url: "/about",
						templateUrl: "partials/about.html"
					})

					.state('work', {
						url: "/work",
						templateUrl: "partials/work.html"
					})

					.state('blog', {
						url: "/blog",
						templateUrl: "partials/blog.html"
					})

					.state('contact', {
						url: "/contact",
						templateUrl: "partials/contact.html"
					})
					.state('clients', {
						url: "/clients",
						templateUrl: "partials/clients.html"
					})
					.state('casestudy', {
						url: "/casestudy",
						templateUrl: "partials/casestudy.html"
					})

});

myApp.controller('homecontroller', function ($scope) {

});