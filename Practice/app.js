(function()
{
'use strict';

angular.module("PracticeTool", [])

.controller("PracticeController", PracticeController);

PracticeController.$inject =["$scope"];

function PracticeController($scope)
{
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.total = 0;

    $scope.DisplaySum = function()
    {
        let sum = $scope.Compute($scope.num1, $scope.num2);
        $scope.total = sum;
    }

    $scope.Compute = function(num1, num2)
    {
        let result = parseInt(num1)+parseInt(num2);
    
        return result;
    }
}



})();