(function(){
  // Création module angular
  var app = angular.module('interest', []);

  // Variables à récuperer
  //var ville = document.getElementById('ville');

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

    var option=[
      ville='null'; //ville recherchée
      recherche="null"; //choix hébergement, activité, poi, etc ...
    ];
  }]);

  //Controller formulaire
  app.controller('formController', ['$scope', function($scope){
    $scope.pushOptions = function(option){
      this.option.ville = document.getElementById('choixVille');
      this.option.ville = document.getElementById('choixCategorie');
    };
  }]);

  // Controller maps
  app.controller('mapsController',['$scope','$http',function($scope,$http){
      // Variables
      $scope.markers = [];


      function initMap(){
         // Options de la Google map
         var mapOptions = {


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

      };
      // Création de la map
      $scope.map = new google.maps.Map(document.getElementById("map"),mapOptions);

  }]);


  //Controller du lieu choisi
  app.controller('placeController', ['$http',function($http){
    place = this;
    place.donnees = [];

    $http.get('http://tour-pedia.org/api/getPlaces?location=' + ville).success(function(data){
       place.donnees = data;
       });
  }]);

  //Controller review renvoyée par l'API
  app.controller('reviewController', function(){

  });


})();
