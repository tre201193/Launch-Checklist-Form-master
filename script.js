// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if ((pilotInput.value === '')|| (copilotInput.value === '')||(fuelLevelInput.value === '') || (cargoMassInput.value === '')) {
         alert("Please enter all information");
         event.preventDefault();
      } else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false) {
         alert("Please enter a name for pilot name or Co-pilot Name");
         event.preventDefault();
      } else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Please enter a number for fuel level and cargo mass");
         event.preventDefault();
      } else {
         document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotInput.value + " Ready";
         document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotInput.value + " Ready";
         if (fuelLevelInput.value <= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Fuel too low for takeoff";
         } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level is ready for takeoff";
         }
         if (cargoMassInput.value >= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for takeoff";
         } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for takeoff";
         }
         if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("faultyItems").style.visibility = "hidden";
         }
         event.preventDefault();
      }

   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
