(function(){
  // Création module angular
  var app = angular.module('interest', []);

  //FACTORY
  app.factory('DataFactory', function(){
    var mainInfos =[
      lat=48.8566140,
      lng=2.3522219,
      items=[]
    ];

    return {
      setMainInfo: function (key, data) {
        mainInfos[key] = data;
      },
      getMainInfo: function (key) {
        return mainInfos[key];
      }
    };


  });

  // CONTROLLERS

  // FORM CONTROLLER
  app.controller('FormController',['$scope','$http', 'DataFactory', function($scope,$http, DataFactory){
    //Variable qui récupère le json des infos demandées par le user
    $scope.items=DataFactory.getMainInfo('items');
    $scope.lat=DataFactory.getMainInfo('lat');
    $scope.lng=DataFactory.getMainInfo('lng');
    $scope.cities=null;
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

            .error(function(){
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
        DataFactory.setMainInfo('items',$scope.items);
        console.log("Données bien récupérées !");
        $scope.loading=false;
      })
      .error(function(){
        console.log("Tu ne charges pas du tout, Cannabis !");
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
        DataFactory.setMainInfo('lat',$scope.lat);
        DataFactory.setMainInfo('lng',$scope.lng);
        $scope.latfac = DataFactory.getMainInfo('lat');
        $scope.lngfac = DataFactory.getMainInfo('lng');
    }

//On récupère le tableau des villes
$scope.getCities();

}]);

  //MAP CONTROLLER
   app.controller('mapController', ['$scope','DataFactory', function($scope, DataFactory){
       // Variables
       $scope.markers = [];
       $scope.lat =null;
       $scope.lng=null;
       $scope.items=DataFactory.getMainInfo('items');

       var infoWindow = new google.maps.InfoWindow({
      		maxWidth: 200
       });

       var markerClusterOptions = {
          gridSize: 60,
          maxZoom: 15,
          minimumClusterSize: 4
        };


       //Initialisation de la carte
       $scope.map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: 48.8566140, lng: 2.3522219},
           zoom:12
       });

       $scope.updateMap = function(){
         // Update map
         $scope.lat=DataFactory.getMainInfo('lat');
         $scope.lng=DataFactory.getMainInfo('lng');
         a = DataFactory.getMainInfo('items');

         var panPoint = new google.maps.LatLng($scope.lat, $scope.lng);
         $scope.map.panTo(panPoint);

         // Affichage des markers sur la map
         for (i = 0; i < a.length; i++){
            createMarker(a[i], $scope.map);
          }

          var markerCluster = new MarkerClusterer($scope.map, $scope.markers, markerClusterOptions);

       }

       function createMarker (item, map){
         polarity = item.polarity;
         if (polarity<=3){
           color = 'E74C3C';
         } else if (polarity <=6){
           color = 'F1C40F';
         } else if(polarity <=10){
           color = '2ECC71';
         } else {
           color = '95A5A6';
         }

         var marker = new google.maps.Marker({
           position: new google.maps.LatLng(item.lat, item.lng),
           map: map,
           title: item.name,
           	icon: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|'+color+'|000000',
         });

         marker.content = '<div>'+ item.name +'</br>' + item.address + '</br>' + 'Polarity : ' + item.polarity +'/10'+ '</div>';
         google.maps.event.addListener(marker, 'click', function(){
        		infoWindow.setContent(marker.content);
        		infoWindow.open(map, marker);
        	});
        $scope.markers.push(marker);




       }

   }]);

   //FILTRE
      app.filter('formatTexte', function() {
       return function(x) {
           var i, c, txt = "";
           x = x.split("")
           txt = x[0].toUpperCase();
           for (i = 1; i < x.length; i++) {
               c = x[i];
               txt += c;
             }
           return txt;
         };
       });
})();
