// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const missionDestination = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
   
         missionDestination.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `
      });
});


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || 
      cargoMassInput.value === "") {
         alert("You must fill out all fields appropriately.");
         return event.preventDefault();
      } else if (!(isNaN(pilotNameInput.value)) || !(isNaN(pilotNameInput.value))) {
         alert("Make sure to enter valid information in each field.")
         return event.preventDefault();
      } else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Make sure to enter valid information in each field.")
         return event.preventDefault();
      }

      let faultyItems = document.getElementById("faultyItems");

      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Not enough fuel for the journey"
         cargoStatus.innerHTML = "Too much mass for take off";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         return event.preventDefault();
      } else if (fuelLevelInput.value < 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Not enough fuel for the journey";
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         return event.preventDefault();
      } else if (cargoMassInput.value > 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         cargoStatus.innerHTML = "Too much mass for take off";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         return event.preventDefault();
      } else {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         faultyItems.style.visibility = "hidden";
         return event.preventDefault();
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
