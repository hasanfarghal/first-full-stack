var app = angular.module("MyApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "components/home/home-page.html",
            controller: "homeController"
        })
        .when("/selling", {
            templateUrl: "components/selling/selling-page.html",
            controller: "sellingController"
        })
        .otherwise({
            redirectTo: "/"
        });
}])