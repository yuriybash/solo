angular.module('rocketships.main', [])

.controller('mainController', function ($scope, $timeout, Startups) {
  // Your code here
  $scope.companyName = 'Seatgeek';
  $scope.drawCompany = Startups.drawCompany;

  $scope.speed = Startups.speed;
  $scope.rate = "above average"

  // var timeout;
  // $scope.$watch('companyName', function(newCompanyName) {
  //       if (newCompanyName) {  //         timeout = $timeout(function() {
  //           console.log(newCompanyName)
  //           $scope.companyName = newCompanyName;
  //           $scope.drawCompany($scope.companyName);
  //           $scope.speed = Startups.speed;
  //         }, 20000);
  //       }
  //     });

    $scope.addCompany = function(){
      Startups.addCompany($scope.companyName);
      $scope.speed = Math.floor(Startups.getSpeed()/1000000);
      console.log("$scope.speed", $scope.speed);

      console.log("EHHHH")

      if($scope.speed < 10){
        $("#rate").css("color", "red");
        console.log("SPEED 1")
        $scope.rate = "below average. Risky choice.";
      } else if($scope.speed < 15){
          $("#rate").css("color", "green");
                  console.log("SPEED 2")
                  $scope.rate = "average. Medium risk.";

      } else{
        $("#rate").css("color", "blue");
                console.log("SPEED 3");
                $scope.rate = "above average. Good choice.";

      }


    }

    $scope.addCompany($scope.companyName);




  
});
