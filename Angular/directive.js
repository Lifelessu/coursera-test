(function()
{

'use strict';

angular.module('Directive', [])
.controller('DirectiveController', DirectiveController);
DirectiveController.inject=['$scope'];

function DirectiveController($scope)
{
    $scope.Example = "I love Angular";

    let country = 
    {
        name:"example",
        shirt:"T-Shirt",                                    
        url:"../img/tshirt.jpg"
    };

    $scope.country = country;

    var persons = 
    [{
        firstName: "Mark Gregory",
        middleName: "Sarmiento",
        lastName: "Corpin"},
    {
        firstName: "Marky",
        middleName: "Mid",
        lastName: "Corpuz"
    }];

    $scope.persons = persons;
  
}


})();