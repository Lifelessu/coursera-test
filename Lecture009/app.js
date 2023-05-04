(function()
{
'use strict';

angular.module("DIApp", [])

.controller("DIController", DIController);

DIController.$inject = ["$scope", "$filter"];
function DIController($scope, $filter)
{
    $scope.name = "";
    $scope.message="";
    
    $scope.upper = function()
    {
        var upperCase = $filter('uppercase');
        $scope.name = upperCase($scope.name);
    }

   
    $scope.sayWelcome = function()
    {
        var wew = $scope.message = "Welcome po";
        return wew;
    }

    /*
    $scope.displayName = function()
    {
        let fullname = fullName($scope.name);
        $scope.name = fullname;
    }

    function fullName(name)
    {
        let fullname = "";

        fullname = name+" Corpin";
        return fullname;

    }*/
}


})();