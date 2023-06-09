(function()
{

'use strict';

angular.module("PracticeTool",[])

.controller("filterController", filterController);
filterController.inject = ['$scope', '$filter'];

function filterController($scope, $filter)
{
    $scope.name = "";

    $scope.displayName=function()
    {
        let execute = $scope.filterName($scope.name);
        $scope.name = execute;
    }

    $scope.filterName=function(name)
    {

        if(name == "mark")
        {
            var output = $filter('uppercase')(name);
        }

        else
        {
            alert("Can't capslock it ");
        }

       
        return output;
    }
}


})();