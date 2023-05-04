(function()
{
'use strict';

angular.module("assignment", [])

.controller("assignmentController", assignmentController);

assignmentController.inject = ["$scope"];
function assignmentController($scope)
{
    $scope.message = "";
    $scope.itemCount = 0;
    $scope.foodEntered = "";
    $scope.checkSpace = "";
    
    $scope.foodCount = function()
    {

        if($scope.foodEntered.length === 0)
        {
            $scope.message = "Empty";
        }

        let foodItems = $scope.foodEntered.split(",").length;
        let checkSpace = $scope.checkSpace = /\s/.test($scope.foodEntered);
        
        if(foodItems>3)
        {
            $scope.message = "Its too much";
        }

        else if(foodItems==3||foodItems<3 && foodItems>=1) 
        {
            $scope.message = "Enjoy your food";
        }

        if(checkSpace == true)
        {
            $scope.message = "You are not allowed to enter a space";
        }

    }
    
}


})();



