(function()
{
'user strict';

angular.module("NameCalculator", [])

/*
.controller("NameCalcController", function($scope)
{
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function()
    {
        var totalNameValue = calculateNameValue($scope.name);
        $scope.totalValue = totalNameValue;
    };

    function calculateNameValue(string)
    {
        var totalStringValue = 0;

        for(var i = 0; i< string.length; i++)
        {
            totalStringValue += string.charCodeAt(i);
        }

        return totalStringValue;
    }

});*/

.controller("CalcController", function($scope)
{
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.sum = 0;

    /*$scope.displaySum = function()
    {
       $scope.sum = parseInt($scope.num1)+parseInt($scope.num2);
    };*/

    $scope.displaySum = function()
    {
        var computedNumber = compute($scope.num1, $scope.num2);
        $scope.sum = computedNumber;
    }

    function compute(num1, num2)
    {
        let result = 0;

        result = parseInt(num1)+parseInt(num2);

        return result;
    }

   


});

})();