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

    /*
    $scope.display = function()
    {
        let displayLoop = $scope.loop($scope.num1, $scope.num2);
        $scope.total = displayLoop;
    }

    $scope.loop = function(num1, num2)
    {
        var output = null;
        
        for(let i = num1;i<=num2; i++)
        {
            var prod = i * num1;
            output = i+" x "+num1 == prod;
        }

        return output;
    }*/
}



})();