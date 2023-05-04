/*(function(){
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope)
{
    $scope.name = "Hajinmark";
    $scope.wew = function()
    {
        var num1 = 12;
        var num2 = 10;
        var result = num1+num2;

        if(result >= 25)
        {
            alert("Good");
        }

        else
        {
            alert("Bad");
        }

        return result;
    };
    
});


})();*/

(function()
{

'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope)
{
    $scope.name="Greg";
    $scope.wew="Corpin";
    $scope.combine = $scope.name+$scope.wew;

    $scope.addNumber=function()
    {
        let a = 12;
        let b = 12;

        let result = a+b;
        let message = "";

        if(result == 24)
        {
            message = "Answer is True";
        }

        else
        {
            message = "False";
        }

        return message;
    }

});

})();