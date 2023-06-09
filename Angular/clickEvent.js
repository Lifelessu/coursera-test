(function()
{

'use strict';
angular.module('clickEvent', [])
.controller('clickEventCtrl', clickEventCtrl);
clickEventCtrl.inject=['$scope'];

function clickEventCtrl($scope)
{
    $scope.rowLimit = 3;

    let programmings =
    [
        {name: "C#", likes: 0, dislikes: 0},
        {name: "ASP.NET", likes: 0, dislikes: 0},
        {name: "SQL", likes: 0, dislikes: 0},
        {name: "AngularJS", likes: 0, dislikes: 0}
    ];
    
    $scope.programmings = programmings;

    $scope.IncrementLikes=function(programming)
    {
        programming.likes++;
    }

    $scope.IncrementDislikes=function(programming)
    {
        programming.dislikes++;
    }
    
    
}



})();