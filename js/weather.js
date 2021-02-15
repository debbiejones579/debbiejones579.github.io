function select() {
    var weather = document.getElementById("shoes").value;
//user input of shoes to equal output of shoes
    switch (weather) {
      case "hot":
        document.getElementById("out").innerHTML = "Sandals";
        break;
      case "rain":
        document.getElementById("out").innerHTML = "Galoshes";
        break;
      case "cold":
        document.getElementById("out").innerHTML = "Boots";
        break;
    } }