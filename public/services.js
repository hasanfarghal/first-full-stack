var app = angular.module("MyApp")
app.service("services", ["$http", function ($http) {
    var self = this;
    this.sellingList = [];
    this.getRequest = function () {
        return $http.get("/sell")
    }
    this.postRequest = function (obj) {
        return $http.post("/sell", obj)
    }
    this.deleteRequest = function (id, index) {
        return $http.delete("/sell/" + id);
    }
    this.updateTodo = function (obj, index) {

        return $http.put("/sell/" + obj._id, obj);
        //            .then(function (response) {
        //            console.log(obj._id+","+ obj)
        //            self.sellingList[index] = response.data;
        //            return response;
    }
}])