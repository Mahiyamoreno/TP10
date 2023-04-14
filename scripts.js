 // javascript for tp 10

    //add some code to wait for the DOM
    document.addEventListener("DOMContentLoaded", function() {
    
    //code to load API 
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', options)
	.then(response => response.json())
	.then(function(response){
	    document.querySelector("#tempF span").innerHTML = response.current.temp_f;
	    document.querySelector("#tempC span").innerHTML = response.current.temp_c;
	    return response; 
	})
	.catch(err => console.error(err));
    
} ) ; 
// Load Time Zone 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/timezone.json?q=99163', options)
	.then(response => response.json())
	.then(function(response) {
	     document.querySelector("#time span").innerHTML = response.current.time;
	    return response;
	    
	})
	
	.catch(err => console.error(err));
	
	
	
	
	