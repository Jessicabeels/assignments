var xhr = new XMLHttpRequest();
//built in constructor function that allows us to make a request

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        //good if 200 & 4
        var jsonData = xhr.responseText;
        //when 200 & 4 we can find the data in the xhr.responseText, but now in JSON format, which doesn't help us access it... so we need to change it to plain javascript. Now its usable. 
        var data = JSON.parse(jsonData);
        var name = data.name;
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};

xhr.open("GET", "http://swapi.co/api/people/1/", true);
xhr.send();