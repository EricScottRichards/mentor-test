var app = angular.module('testApp');
app.service('mainService', function(){
	
	var myData = [{
		name: 'Jacob',
		age: 22
	}, {
	  name: 'Tyler',
	  age: 24
	}, {
	  name: 'Jason',
	  age: 27
	}, {
	  name: 'Dan',
	  age: 24
	}]

	this.getData = function(){
		return myData
	}

	this.ageSum = function(){
		var sum = 0
		for(var i = 0; i < myData.length; i++){
			sum = sum + myData[i].age
		}
		return sum;
	}
})