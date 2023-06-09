(function()
{

'use strict';

angular.module('Practice', [])
.controller('PracticeController', PracticeController);
PracticeController.inject=['$scope'];

function PracticeController($scope)
{
    
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.sum = 0;

   $scope.DisplaySum=function()
   {
        let total = $scope.Compute($scope.num1, $scope.num2);
        $scope.sum = total;
   }

   $scope.Compute = function(num1,num2)
   {
        let total = parseInt(num1)+parseInt(num2);
        return total;
   }
}


})();