angular.module('rocketships.angellist', [])

.factory('Angellist', function($http, $q) {

    var testFunction = function() {
        console.log("THE TEST FUNCTION WORKED")
    };

    // var baseURL = 'https://api.angel.co/1/jobs?access_token=9c2e8d1d382b22695ce5991ef78fcca700d1d1aedf19cb28&page=';
    var findCompanyID = function(companyName){

    	var deferred = $q.defer();
    	var url = "https://api.angel.co/1/search?query=" + companyName + "&type=Startup&callback=JSON_CALLBACK";
    	 
    	$http.jsonp(url).success(function(data, status, headers, config) {
    	    console.log("data from search error", data);
    	    deferred.resolve(data);
    	}).error(function(data, status, headers, config) {
    	    //this always gets called
    	    console.log("error", error)
    	    deferred.reject(status);
    	});
    	return deferred.promise;

    }


    var fetchFromAngelList = function(companyID) {
    	console.log("TEST1111111111111111")
        var deferred = $q.defer();
        var url = "https://api.angel.co/1/startups/" + companyID + "?callback=JSON_CALLBACK";
         console.log("TEST22222222222222222")
        $http.jsonp(url).success(function(data, status, headers, config) {
            // console.log("data", data);
            deferred.resolve(data);
        }).error(function(data, status, headers, config) {
            //this always gets called
            deferred.reject(status);
        });
        return deferred.promise;

    };




    return {
        testFunction: testFunction,
        fetchFromAngelList: fetchFromAngelList,
        findCompanyID: findCompanyID,
    }
});
