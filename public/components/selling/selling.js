var app = angular.module("MyApp");
app.controller("sellingController", ["$scope", "$http", "services", function ($scope, $http, services) {
    $scope.post = function (item) {
        services.postRequest(item).then(function () {
            console.log("done");
            $scope.view = true;

        });
        $scope.deleteRequest = function (dlt) {
            services.deleteRequest(dlt._id).then(function (resp) {
                for (var i = $scope.data.length - 1; i >= 0; i--) {
                    if ($scope.data[i]._id === dlt._id) {
                        $scope.data.splice(i, 1);
                    }
                }
            });
        };
    }
}]);