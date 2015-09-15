beerStalker.controller('BeerStalkController', ['$scope', '$resource', function($scope, $resource) {

  var self = this;

  $scope.search = function() {
    var searchResource = $resource('https://api.meetup.com/2/open_events.json?and_text=true&:text&:country&:city&:key&:text_format', {
        text_format: "text_format=plain",
        text: "text=free+beer",
        country: "country=gb",
        city: "city=" + $scope.cityName,
        key: 'key=646f252216306e6d712d7c536a3c2565',
        callback: 'JSON_CALLBACK' },
        { get: { method: 'JSONP'} });

      searchResource.get().$promise.then(function(response){
        console.log(response.results)
        console.log(response.results.length)
        if (response.results.length > 0) {
          console.log('results.length is greater than 0')
          var filteredResults = [];
          for (index = 0; index < response.results.length; index++) {
            var result = response.results[index].description;
            if(result.indexOf('free beer') >= 0) {
              filteredResults.push(response.results[index]);
              console.log(filteredResults)
            }
          }
          $scope.searchResult = (filteredResults)//filtered by 'free beer';
        } else {
          alert("Invalid search")
        };
      });
    };
}]);
