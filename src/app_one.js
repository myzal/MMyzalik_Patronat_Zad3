AppOne = angular.module('AppOne', ['ui.router']); // rejestrujemy aplikacje pod `AppOne``
AppOne.controller('NameController', ['$scope','$filter', function($scope, $filter){
$scope.name = 'Mateusz'; //haszmapa odwołanie od razu do adresu 
 var orderBy = $filter('orderBy');

$scope.Oceny=[
{ocena: 5, przedmiot:"Analiza", event: "sprawdzian"},
{ocena: 2, przedmiot:"Systemy", event: "wejsciowka"},
{ocena: 4, przedmiot:"Sztuczna inteligencja", event: "kolokwium"},
{ocena: 3, przedmiot:"Podstawy programowania", event: "egzamin"},
{ocena: 4, przedmiot:"Fizyka", event: "egzamin"},
{ocena: 2, przedmiot:"Algorytmy", event: "sprawdzian"},
{ocena: 3, przedmiot:"Podstawy informatyki", event: "kolokwium"},
{ocena: 4, przedmiot:"Elektronika", event: "egzamin"},
{ocena: 5, przedmiot:"Programowanie obiektowe", event: "kolokwium"},
{ocena: 3, przedmiot:"Programowanie w java", event: "egzamin"},
{ocena: 5, przedmiot:"Programowanie komponentowe", event: "sprawdzian"},
{ocena: 4, przedmiot:"Matematyka obliczeniowa", event: "wejsciowka"},
{ocena: 5, przedmiot:"Inwentyka", event: "kolokwium"},
{ocena: 4, przedmiot:"wf", event: "egzamin"},
{ocena: 5, przedmiot:"Technologie cyfrowe", event: "sprawdzian"},
{ocena: 4, przedmiot:"Bazy danych", event: "wejsciowka"},
{ocena: 3, przedmiot:"Statystyka", event: "egzamin"},
{ocena: 2, przedmiot:"MakroMikroekonomia", event: "wejsciowka"},
{ocena: 3, przedmiot:"Technologie internetowe", event: "sprawdzian"},
{ocena: 2, przedmiot:"Angielski", event: "kolokwium"},
];

 $scope.order = function(predicate, reverse) {
    $scope.Oceny = orderBy($scope.Oceny, predicate, reverse);
	};


}]);

//zad2
AppOne.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/tabelka");
  //
  // Now set up the states
  $stateProvider
    .state('name', {
      url: "/name",
      templateUrl: "src/ptrng.tmplt.html",
      controller: function($scope) {
        $scope.name = 'Mateusz';
      } 
    })
	.state('hello_world', {
      url: "/hello_world",
      templateUrl: "src/hello_world.html"
	  })  
	  	.state('tabelka', {
      url: "/tabelka",
      templateUrl: "src/tabelka.html"
	  })  
	
	
	
});


AppOne.directive('ptrngName',function()
{
return{
restrict: 'E',
template: 'Your name is {{name}}'
};
});