(function(){
  // Création module angular
  var app = angular.module('interest', []);

  // CONTROLLERS

  // MAIN CONTROLLER
  app.controller('mainController',['$scope','$http', function($scope,$http){
    //Variable qui récupère le json des infos demandées par le user
    $scope.items=null
    $scope.nbResult = 20;
    $scope.loading=false;

    //Fonction qui récupère les infos par categorie et ville choisies
    $scope.getInfos = function(){
        $scope.loading=true;
      $http.get("http://tour-pedia.org/api/getPlaces?location="+$scope.choixVille+"&category="+$scope.choixCategorie)
      .success(function(data){
        $scope.items=data;
        $scope.loading=false;
      })
      .error(function(errormsg){
        alert(errormsg);
        $scope.loading=false;
      });
    }
}]);
    // Controller maps
     app.controller('mapsController',['$scope','$http',function($scope,$http){
         // Variables
         $scope.markers = [];


         function initMap(){
         // Options de la Google map
         var mapOptions = {
             center: {
                 lat:48.85703523304221,
                 lng:2.3490142822265625
             },
              zoom:12
         };

         $scope.map = new google.maps.Map(document.getElementById("map"),mapOptions);
         }
     }]);
})();
