(function(){
  // Création module angular
  var app = angular.module('interest', []);

  // CONTROLLERS

  // MAIN CONTROLLER
  app.controller('mainController',['$scope','$http', function($scope,$http){
    //Variable qui récupère le json des infos demandées par le user
    $scope.items=null;
    $scope.cities=null;
    $scope.lat=null;
    $scope.lng=null;
    $scope.nbResult = 20;
    $scope.loading=false;

    //Fonction qui récupère les differentes villes ainsi que latitude/longitude
    $scope.getCities = function () {
        $scope.loading=true;
        console.log("Chargement des villes...");
        $http.get("json/villes.json")
            .success(function (data) {
                $scope.cities = data;
                $scope.loading = false;
                console.log("Chargement des villes OK");
            })

            .error(function(errormsg){
                alert(errormsg);
                $scope.loading = false;
                console.log("Erreur chargement villes");
            })
    }

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



    // Fonction qui récupère les coordonnées d'une ville en fonction du json villes.json
    $scope.getLatLng = function(){
      switch($scope.choixVille) {
          case'Amsterdam':
              choixVilleNum = 0;
              break;
          case 'Barcelona':
              choixVilleNum = 1;
              break;
          case 'Berlin':
              choixVilleNum = 2;
              break;
          case 'London':
              choixVilleNum = 3;
              break;
          case 'Paris':
              choixVilleNum = 4;
              break;
          case 'Rome':
              choixVilleNum = 5;
              break;
          default:
              console.log("erreur switch");
        }
        $scope.lat = $scope.cities[choixVilleNum].lat;
        $scope.lng = $scope.cities[choixVilleNum].lng;
    }

//On récupère le tableau des villes
$scope.getCities();

}]);

  //MAP CONTROLLER
   app.controller('mapsController',['$scope',function($scope){
       // Variables
       $scope.markers = [];


       function updateMap(){
      var panPoint = new google.maps.LatLng($scope.lat, $scope.lng);

      map.panTo(panPoint);
       }
   }]);
})();
