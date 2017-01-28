$(document).ready(function(){

    // get geolocation data 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            
            var lon = position.coords.longitude;
            var lat = position.coords.latitude;
    
            // create a API_URL varable        
            var API_URL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=c53d1f9b910cbf7331ed0dbf5e1e88d2";
           
            $.getJSON(API_URL, function(data){
                var weatherType = data.weather[0].description;
                var kel = data.main.temp;
                var windSpeed = data.wind.speed;
                var city = data.name;
                
                // temperature conversion 
                var far = ((9/5)*(kel-273)+32).toFixed(1);
                var cel = (kel-273).toFixed(1);
                
                // far/cel toggle 
                var tempSwap = true;
                
                // hexadecimal 
                // far - &#8457
                // cel - &#8451
                
                // convert windspeed
                var convSpeed = (2.237*(windSpeed)).toFixed(1);
                
                $("#desc").html(weatherType);
                $("#city").html(city);
                $("#temp").html(far+ " &#8457;");
                $("#temp").click(function(){
                    if(tempSwap === false){
                        $("#temp").html(far+" &#8457;");
                        tempSwap = true;
                    } else {
                        $("#temp").html(cel+" &#8451;");
                        tempSwap = false;
                    }    
                });
                $("#speed").html(convSpeed+" mph")
                
                if(far > 80) {
                    $("#image").html("<img src='https://image.flaticon.com/icons/svg/136/136723.svg' />")    
                } else if (far > 60) {
                    $("#image").html("<img src='https://image.flaticon.com/icons/svg/131/131046.svg' />") 
                } else if (far > 40) {
                    $("#image").html("<img src='https://image.flaticon.com/icons/svg/131/131043.svg' />")
                } else {
                     $("#image").html("<img src='https://image.flaticon.com/icons/svg/275/275520.svg' />")
                }
                
                
            });
        });
    }
});