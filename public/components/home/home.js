var app = angular.module("MyApp");
app.controller("homeController", ["$scope", "$http", "services",
    function ($scope, $http, services) {

        $scope.getData = function () {
            services.getRequest().then(function (response) {
                $scope.data = response.data;
                console.log(response.data);

            });
        }
        $scope.getData();

        $scope.deleteRequest = function (dlt) {
            services.deleteRequest(dlt._id).then(function (resp) {
                for (var i = $scope.data.length - 1; i >= 0; i--) {
                    if ($scope.data[i]._id === dlt._id) {
                        $scope.data.splice(i, 1);
                    }
                }
            });
        };
         

        $scope.updateTodo = function (newObj, index) {
            
            console.log(newObj + "," + index)
            services.updateTodo(newObj, index).then(function () {
                $scope.getData();
                newObj.editing = false;
            });
        };

    }]);