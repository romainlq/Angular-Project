(function(){
  // Création module angular
  var app = angular.module('interest', []);

  // Controllers
  // Controller général
  app.controller('mainController',['$scope','$http', function($scope,$http){
    /*
    $scope.ville=null;
    //  $scope.option;
    $scope.option=null;
    this.options=option;
    */
    $scope.loading=false; // Charge les données ou non

    recherche="null"; //choix hébergement, activité, poi, etc ...
    

  }]);

  //Controller formulaire
  app.controller('formController', ['$scope', function($scope){
    $scope.pushOptions = function(option){
      $scope.option.ville = $scope.choixVille;
      $scope.option.categorie = $scope.choixCategorie;
    };
  }]);

  // Controller maps
  app.controller('mapsController',['$scope', function($scope){
      // Variables
      $scope.markers = [];

      // Options de la Google map
      var mapOptions = {
           center: new google.maps.LatLng(48.85703523304221, 2.3490142822265625),
           zoom:12,
           scrollwheel:false,
      }
      console.log("Affichage de la map...");
      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      console.log("Map affichée...");
      
  }]);
  
})();
