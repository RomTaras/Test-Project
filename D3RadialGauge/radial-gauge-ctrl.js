app.controller('RadialGaugeCtrl', ['$scope', '$interval'
, function ($scope, $interval
) {
    $scope.value = 1.5;
    $scope.upperLimit = 6;
    $scope.lowerLimit = 0;
    $scope.unit = "kW";
    $scope.precision = 2;
    $scope.ranges = [
        {
            min: 0,
            max: 1.5,
            color: '#DEDEDE'
        },
        {
            min: 1.5,
            max: 2.5,
            color: '#8DCA2F'
        },
        {
            min: 2.5,
            max: 3.5,
            color: '#FDC702'
        },
        {
            min: 3.5,
            max: 4.5,
            color: '#FF7700'
        },
        {
            min: 4.5,
            max: 6.0,
            color: '#C50200'
        }
    ];
    


  $interval(function () {
        $.ajax({
                type: 'GET',
                url: ' http://localhost:8080',
                dataType: 'text'
            })
                .done(function(response) {
                    $scope.value = parseInt(response);
                    console.log($scope.value);
                })

    }, 2000);
    
    
}]);
