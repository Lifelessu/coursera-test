(function()
{

'use strict';

angular.module("Review", [])
.controller("ReviewController", ReviewController);
ReviewController.$inject=["$scope"];

function ReviewController($scope)
{

    $scope.counter = 0;
    

    $scope.Increment = function()
    {
       $scope.counter++;
    }
    /*$scope.num1 = 0;
    $scope.num2 = 0;
    $scope.sum = 0;

    $scope.DisplaySum=function(num1,num2)
    {
        //let result = $scope.AddNumber($scope.num1,$scope.num2);
        let result = parseInt($scope.num1)+parseInt($scope.num2);
        $scope.sum = result;

    }*/

    /*$scope.AddNumber=function(num1, num2)
    {
        let total = parseInt(num1)+parseInt(num2);

        return total;
    }*/
}

})();