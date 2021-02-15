function select() { //finding shoes to fit the weather
    var weather = document.getElementById("shoes").value;
//user input of shoes to equal output of shoes
    switch (weather) {
      case "hot":
        document.getElementById("out").innerHTML = "Sandals"; // if user enteres hot output sandals
        break;
      case "rain"://if user inouts rain output galoshes
        document.getElementById("out").innerHTML = "Galoshes";
        break;
      case "cold": // if user inouts cold output boots
        document.getElementById("out").innerHTML = "Boots";
        break;
    } }