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
      
      $scope.updateMap = function (vlat, vlng){
          map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: vlat, lng: vlng},
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP, 
          scrollwheel: false
        });
          
      }     
  }]);
  
})();
