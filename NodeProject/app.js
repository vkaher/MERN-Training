function weather() {

    let req = new XMLHttpRequest();
    let city = document.getElementById('locationText').value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93f26e3c57081a6210de53b8dcfdfea4`
    req.open('GET',url,true);

    

    //Request on load
    req.onload = function(){
        //document.getElementById('tableData').style.display == none;
        if(req.status>=200 && req.status <400){
            let data = JSON.parse(req.responseText);
            console.log(data);
            let ctemp = data.main.temp-273.15;
            document.getElementById('temp').textContent = Math.floor(ctemp);
            document.getElementById('city').textContent = data.name;
            document.getElementById('country').textContent = data.sys.country;
            document.getElementById('windspeed').textContent = " Wind speed is "+data.wind.speed;
            document.getElementById('weather').textContent = data.weather[0].main;

            function dataTable() {
                var x = document.getElementById('dataTable');
                var title = document.getElementById('title');
                var myNote = document.getElementById('error');
                if (x.style.display === "none" || title.style.display === "none" ) {
                    x.style.display = "table";
                    title.style.display = "block";
                  } ;   
            }
            dataTable();
            


        } else{
            document.getElementById('error').textContent = "Please provide the city Name" ;

            function dataTable() {
                var x = document.getElementById('dataTable');
                var title = document.getElementById('title');
                if (x.style.display === "table" || title.style.display === "block") {
                    x.style.display = "none";
                    title.style.display = "none";
                  } ;   
            }
            dataTable();
        }
    }
    //send the request
    req.send();

    // message on error 
    req.onerror = function() {
        document.getElementById('error').textContent = "Please provide the city Name" ;
        console.log("Error!!")
    }

    
};