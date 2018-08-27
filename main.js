// Write your JavaScript code here
var planets = [
    {name: 'Pluto', gravity: 0.06},
    {name: 'Neptune', gravity: 1.148},
    {name: 'Uranus', gravity: 0.917},
    {name: 'Saturn', gravity: 1.139},
    {name: 'Jupiter', gravity: 2.640},
    {name: 'Mars', gravity: 0.3895},
    {name: 'Moon', gravity: 0.1655},
    {name: 'Earth', gravity: 1},
    {name: 'Venus', gravity: 0.9032},
    {name: 'Mercury', gravity: 0.377},
    {name: 'Sun', gravity: 27.9},
  ];
 


for(var i = 0; i < planets.length; i++) {
  var opt = document.createElement("option");
  opt.textContent = planets[i].name;
  opt.value = planets[i].name;
 document.getElementById("planets").appendChild(opt);

};


  function calculate () {
    var weight = document.getElementById("user-weight").value;
    var planet = document.getElementById("planets");
    //var planetValue = planets.gravity;
    var planetName = planet.options[planet.selectedIndex].innerHTML;
    var gravityConversion;
    for (i=0;i< planets.length; i++)
    if (planet.value === planets[i].name) {
      gravityConversion = planets[i].gravity
    }
    var total = (weight * gravityConversion);
    console.log(planetName)
    document.getElementById("output").innerText = "If you were on " + planetName + ', you would weigh ' + total.toString() + 'lbs!';
   }
    
  

  document.getElementById('calculate-button').addEventListener('click', calculate);