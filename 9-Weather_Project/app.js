const express = require("express");
const https = require("https");   //this node module is used to fetch data from somebody else server to our
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname+ "/index.html");
    });

app.post("/",function(req, res){

    const query = req.body.cityName ;          //from body-parser concept
    const apiKey = "6ba767fccf2e21de369854c8b1dfc998";
    const unit = "metric";
    //Since we have to put this url as a parameter inside out https.get() method, and its too long, therefore we have decided to make a variable url to contains this 
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units="+ unit;

    //Passing the variable url (previously made) as a parameter to our https.get() method to fetch data from external server
    https.get(url, function(response){
        //console.log(response);          //Fetching data send by that url location to our terminal 
        console.log(response.statusCode);  //Fetching a particular data that we need  i.e statusCode (like 200,400,etc..)
        
        response.on("data", function(data){            //fetching data from JSON file
            //console.log(data);
            
            const weatherData= JSON.parse(data);        //used to convert the hexadecimal data to JSON format

            const temp = weatherData.main.temp;
            //console.log(temp);
            const weatherDescription = weatherData.weather[0].description;

            const icon = weatherData.weather[0].icon;

            const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
            //console.log(weatherDescription);
            //console.log(weatherData);

            //We cannot write more than one res.send() inside a get method therefore we use res.write() which can be used more than one time
            res.write("<p>The weather is currently "+ weatherDescription+"</p>");   //displaying weather description
            res.write("<h1>The temperature in " + query +" is "+ temp + " degree Celcious.</h1>");  //displaying weather temperature
            res.write("<img src="+ imageURL+">");          //displaying weather image icon
            res.send();
            /*//Example to convert a JS object to JSON string format through stringify  
            const object= {
                name: "Reetesh",
                favouriteFood: "Paneer"
            }
            console.log(JSON.stringify(object));*/

        })
    })

});



app.listen(3000, function(){
    console.log("Server is running on port 3000");
});