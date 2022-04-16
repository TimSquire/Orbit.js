(function(global, document, $) { 
   //Hardcoded data for each different planet in the solar system
   const planetNames = ["mercury", "venus", "earth", "mars", "jupiter", "saturn",
   "uranus", "neptune"];
   const planetColors = ["#ada8a5", "#a57c1b", "blue", "#9C2E35", "#d8ca9d", 
   "#ead6b8", "#d1e7e7", "#5b5ddf"];
   const planetRadii = [2.85, 7.125, 7.5, 3.975, 75.9, 70.875, 30, 29.1];
   const planetOrbit = [30, 56, 77.5, 117.5, 175, 250, 270, 300];
   const planetSpeed = [15, 17, 19, 21, 24, 26, 28, 30];
   let suns = 0;

   class Planet {
      constructor(orbitSpeed, planetColor, planetRadius, planetOrbitRadius, 
         planetName){
      this.orbit_angle = 0;
      this.orbitSpeed = orbitSpeed;
      this.planetColor = planetColor;
      this.planetRadius = planetRadius;
      this.planetOrbitRadius = planetOrbitRadius;
      this.planetName = planetName;
      }
   };

   class Orbit {
      constructor(x_position, y_position, radius, colour){
         this.x_position = x_position;
         this.y_position = y_position;
         this.radius = radius;
         this.colour = colour || 'orange';
         this.planets = [];
         this.id = suns;
      }

      makePlanet(orbitSpeed, planetColor, planetRadius, planetOrbitRadius, 
         planetName){
            return new Planet(String(orbitSpeed), String(planetColor), String(planetRadius), String(planetOrbitRadius), 
               String(planetName));
         }

      orbit(planetsArray) {

         var self = this;
         let x_pos = this.x_position;
         let y_pos = this.y_position;

         planetsArray = planetsArray || ['earth']
         for(let c = 0; c < planetsArray.length; c++){
            if(planetsArray[c].constructor.name == "String"){
               //Adding data to the planets array
               let planetInd = planetNames.indexOf(planetsArray[c]);
               if(planetInd == -1){
                  console.log("planet '" + String(planetsArray[c]) + "' not in solar system");
               } else {
                  this.planets.push(new Planet(String(planetSpeed[planetInd]), String(planetColors[planetInd]), String(planetRadii[planetInd]), 
                     String(planetOrbit[planetInd]), String(planetNames[planetInd])));
               }
            } else if(planetsArray[c].constructor.name == "Planet"){
               planetsArray[c].planetRadius = String(planetsArray[c].planetRadius / 849.46666667);
               planetsArray[c].planetName = String(planetsArray[c].planetName).replace(/ /g, "");
               this.planets.push(planetsArray[c]);
               planetNames.push(String(planetsArray[c].planetName).replace(/ /g, ""));
               planetColors.push(String(planetsArray[c].planetColor));
               planetOrbit.push(String(planetsArray[c].planetOrbitRadius));
               planetRadii.push(String(planetsArray[c].planetRadius));
               planetSpeed.push(String(planetsArray[c].orbitSpeed));
            }
         }
         console.log(planetsArray);
         //Drawing the sun
         const Drawsun = document.createElement('div')
         Drawsun.setAttribute("id", "sun" + String(suns));
         Drawsun.className = "sun";
         suns++;
         Drawsun.style = 'height: ' + String(this.radius) + 'px; width: ' + String(this.radius) + 'px; background-color: ' + this.colour + '; border-radius: 50%; position: absolute;'
         Drawsun.style.left = String(this.x_position) + "px";
         Drawsun.style.top = String(this.y_position) + "px";
         const body = $('body')
         body.append(Drawsun)
      
         function move() {
               
               //Orbit each planet in planets around sun
               for (let i = 0; i < self.planets.length; i++){
                  //Modifying the planet DOM Element's position of the page to simulate orbit
                  let x = x_pos + (self.planets[i].planetOrbitRadius *
                                       Math.cos(self.planets[i].orbit_angle*(Math.PI/180)));
                  let y = y_pos + (self.planets[i].planetOrbitRadius *
                                       Math.sin(self.planets[i].orbit_angle*(Math.PI/180)));
      
                  self.planets[i].orbit_angle += (10 / self.planets[i].orbitSpeed);
                  if (self.planets[i].orbit_angle > 360) {
                     self.planets[i].orbit_angle = 0;
                  };
      
                  const satellite = document.createElement('div')
                  satellite.setAttribute("id", String(self.planets[i].planetName + self.id));
                  satellite.style.height = String(self.planets[i].planetRadius) + "px";
                  satellite.style.width = String(self.planets[i].planetRadius) + "px";
                  satellite.style.left = String(x) + "px";
                  satellite.style.top = String(y) + "px";
                  satellite.style.backgroundColor = self.planets[i].planetColor;
                  satellite.style.borderRadius = "50%";
                  satellite.style.position = "absolute";
                  if ($("#" + String(self.planets[i].planetName + self.id)).length > 0){
                     const old_planet = 
                     document.getElementById(String(self.planets[i].planetName + self.id));
                     old_planet.remove();
                  }
                  body.append(satellite)
               }
               setTimeout(move, 5);
         };
      
         move();
      
      
      
      };
      
      
      displayPlanets(){
         var self = this;
      
         const body = $('body')
         
         //Table with info
      
         let table = document.createElement('table');
         table.id = "table" + String(self.id);
         table.className = "table" + String(self.id);
         let thead = document.createElement('thead');
         let tbody = document.createElement('tbody');
      
         table.appendChild(thead);
         table.appendChild(tbody);
      
         body.append(table);
      
         let row_1 = document.createElement('tr');
         let heading_1 = document.createElement('th');
         heading_1.innerHTML = "Name";
         let heading_2 = document.createElement('th');
         heading_2.innerHTML = "Colour";
         let heading_3 = document.createElement('th');
         heading_3.innerHTML = "Radius";
         let heading_4 = document.createElement('th');
         heading_4.innerHTML = "Orbit";
         let heading_5 = document.createElement('th');
         heading_5.innerHTML = "Speed";
         let heading_6 = document.createElement('th');
         heading_6.innerHTML = "Show";
         let heading_7 = document.createElement('th');
         heading_7.innerHTML = "Remove";
      
         row_1.appendChild(heading_1);
         row_1.appendChild(heading_2);
         row_1.appendChild(heading_3);
         row_1.appendChild(heading_4);
         row_1.appendChild(heading_5);
         row_1.appendChild(heading_6);
         row_1.appendChild(heading_7);
         thead.appendChild(row_1);
      
         for(let i = 0; i < self.planets.length; i++){
            //Planet Label
            let row = document.createElement('tr');
            let heading_1 = document.createElement('td');
            heading_1.innerHTML = String(self.planets[i].planetName);
            let heading_2 = document.createElement('td');
            heading_2.innerHTML = String(self.planets[i].planetColor);
            let heading_3 = document.createElement('td');
            let rad = String((self.planets[i].planetRadius * 849.46666667) + 0.5).split(".");
            heading_3.innerHTML = rad[0] + "km";
            let heading_4 = document.createElement('td');
            heading_4.innerHTML = String(self.planets[i].planetOrbitRadius);
            let heading_5 = document.createElement('td');
            heading_5.innerHTML = String(self.planets[i].orbitSpeed);
            let heading_6 = document.createElement('td');
            let heading_7 = document.createElement('td');
      
            //Planet Checkbox
            const planetButton = document.createElement("input");
            planetButton.name = "planet";
            planetButton.id = String(self.planets[i].planetName) + "Button";
            planetButton.type = "checkbox";
            planetButton.className = "planet";
      
            for(let c = 0; c < self.planets.length; c++){
               if(String(self.planets[c].planetName) == String(planetButton.id.slice(0, -6))){
                  planetButton.checked = true;
               }
               console.log("goet");
            }
      
            heading_6.appendChild(planetButton);
      
            //Planet remove
            const removeButton = document.createElement("input");
            removeButton.name = "remove" + self.id;
            removeButton.id = "remove" + String(self.planets[i].planetName);
            removeButton.type = "button";
            removeButton.className = "remove" + String(self.id);
            removeButton.value = "remove";
            heading_7.appendChild(removeButton);
      
            row.appendChild(heading_1);
            row.appendChild(heading_2);
            row.appendChild(heading_3);
            row.appendChild(heading_4);
            row.appendChild(heading_5);
            row.appendChild(heading_6);
            row.appendChild(heading_7);
            thead.appendChild(row);
         }
      
      
         const buttons = document.getElementsByClassName("planet");
      
         for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('change', function handleClick() {
               if(buttons[i].checked) {
                  //checked planet
                  self.planets.push(new Planet(planetSpeed[planetNames.indexOf(String(buttons[i].id.slice(0, -6)))], 
                  planetColors[planetNames.indexOf(String(buttons[i].id.slice(0, -6)))], 
                  planetRadii[planetNames.indexOf(String(buttons[i].id.slice(0, -6)))], 
                  planetOrbit[planetNames.indexOf(String(buttons[i].id.slice(0, -6)))], 
                  buttons[i].id.slice(0, -6)));
                  console.log(self.planets);
               } else {
                  //unchecked planet
                  for(let c = 0; c < self.planets.length; c++){
                     if (self.planets[c].planetName == buttons[i].id.slice(0, -6)){
                        //remove planet from DOM
                        if ($("#" + String(self.planets[c].planetName + self.id)).length > 0){
                           const old_planet = 
                           document.getElementById(String(self.planets[c].planetName + self.id));
                           old_planet.remove();
                        }
                        self.planets.splice(c, 1);
                     }
                  }
               }
            });
         }
      
         const removeButtons = document.getElementsByClassName("remove" + String(self.id));
      
         for (let i = 0; i < removeButtons.length; i++){
            removeButtons[i].addEventListener('click', function removeClick() {
               console.log(String(removeButtons[i]));
               let planetId = String(removeButtons[i].id).slice(6);
               let planetToRemove = document.getElementById(planetId + self.id);
               if(planetToRemove != null){
                  planetToRemove.remove();
               }
               
               for(let c = 0; c < self.planets.length; c++){
                  if (self.planets[c].planetName == String(removeButtons[i].id).slice(6)){
                     console.log("removing!!!")
                     self.planets.splice(c, 1);
                  }
               }
      
               let planetIndex = planetNames.indexOf(String(removeButtons[i].id).slice(6));
               planetNames.splice(planetIndex, 1);
               planetColors.splice(planetIndex, 1);
               planetRadii.splice(planetIndex, 1);
               planetOrbit.splice(planetIndex, 1);
               planetSpeed.splice(planetIndex, 1);
      
               const DOMtable = document.getElementById("table" + String(self.id));
               DOMtable.remove();
               self.displayPlanets();
            });
         }
      }
      
      planetInfo() {
         var self = this;
         let planetInd = 0;
         const body = $('body')
         let sunElement = document.getElementsByClassName("sun");
         console.log(sunElement);
         for(let b = 0; b < sunElement.length; b++){
            sunElement[b].addEventListener("mouseenter", function addInfo( event ) {
               if ($("#" + String("para")).length == 0){
                  console.log(sunElement[b]);
                  let para = document.createElement("p");
                  para.setAttribute("id", "para");
                  let curPlanet = self.planets[planetInd];
                  //para.style.top = String(sunElement.style.top.slice(0, -2)) + "px";
                  //para.style.left = String(sunElement.style.left.slice(0, -2) * 1.8) + "px";
                  //para.style.position = "absolute";
            
                  para.innerText = String(curPlanet.planetName) + " is " + String(((planetRadii[planetNames.indexOf(String(curPlanet.planetName))]) * 849.46666667) + 0.5).split(".")[0] + ` kilometers in diameter!`;
                  sunElement[b].appendChild(para);
               }
            })
      
            sunElement[b].addEventListener("click", function sunclick( event ) {
               if(self.id == sunElement[b].id.slice(-1)){
                  planetInd++;
               if ($("#para").length > 0){
                  const old_para = document.getElementById("para");
                  old_para.remove();
               }
               if(planetInd >= self.planets.length){
                  planetInd = 0;
               }
               console.log(self.planets);
         
               let para = document.createElement("p");
               para.setAttribute("id", "para");
               let curPlanet = self.planets[planetInd];
               //para.style.top = String(sunElement.style.top.slice(0, -2)) + "px";
               //para.style.left = String(sunElement.style.left.slice(0, -2) * 1.8) + "px";
               //para.style.position = "absolute";
         
               para.innerText = String(curPlanet.planetName) + " is " + String(((planetRadii[planetNames.indexOf(String(curPlanet.planetName))]) * 849.46666667) + 0.5).split(".")[0] + ` kilometers in diameter!`;
               sunElement[b].appendChild(para);
               }
            })
         
            sunElement[b].addEventListener("mouseleave", function( event ) {
               if ($("#para").length > 0){
                  const old_para = document.getElementById("para");
                  old_para.remove();
               }
            })
         }
      }
      
      addPlanet(){
         var self = this;
         const body = $('body');
      
         //New Planet Name Label
         const nameLabel = document.createElement("LABEL");
         nameLabel.innerText = "Name of Planet: ";
         body.append(nameLabel);
      
         const newPlanetName = document.createElement("input");
         newPlanetName.id = "newPlanetName";
         newPlanetName.type = "text";
         newPlanetName.className = "input";
         body.append(newPlanetName);
         body.append('<br/>');
         body.append('<br/>');
      
         //New Planet Colour Label
         const colourLabel = document.createElement("LABEL");
         colourLabel.innerText = "Colour of Planet: ";
         body.append(colourLabel);
      
         const newPlanetColour = document.createElement("input");
         newPlanetColour.id = "newPlanetColour";
         newPlanetColour.type = "text";
         newPlanetColour.className = "input";
         body.append(newPlanetColour);
         body.append('<br/>');
         body.append('<br/>');
      
         //New Planet Radius Label
         const radiusLabel = document.createElement("LABEL");
         radiusLabel.innerText = "Radius of Planet(in km): ";
         body.append(radiusLabel);
      
         const newPlanetRadii = document.createElement("input");
         newPlanetRadii.id = "newPlanetRadii";
         newPlanetRadii.type = "text";
         newPlanetRadii.className = "input";
         body.append(newPlanetRadii);
         body.append('<br/>');
         body.append('<br/>');
      
         //New Planet Orbit Label
         const orbitLabel = document.createElement("LABEL");
         orbitLabel.innerText = "Orbit distance of Planet: ";
         body.append(orbitLabel);
      
         const newPlanetOrbit = document.createElement("input");
         newPlanetOrbit.id = "newPlanetOrbit";
         newPlanetOrbit.type = "text";
         newPlanetOrbit.className = "input";
         body.append(newPlanetOrbit);
      
         body.append('<br/>');
         body.append('<br/>');
      
         //New Planet Speed Label
         const speedLabel = document.createElement("LABEL");
         speedLabel.innerText = "Speed of Planet: ";
         body.append(speedLabel);
      
         const newPlanetSpeed = document.createElement("input");
         newPlanetSpeed.id = "newPlanetSpeed";
         newPlanetSpeed.type = "text";
         newPlanetSpeed.className = "input";
         body.append(newPlanetSpeed);
      
         body.append('<br/>');
         body.append('<br/>');
      
         const submitButton = document.createElement("input");
         submitButton.id = "submit";
         submitButton.type = "submit";
         submitButton.value = "Add New Planet!";
         submitButton.className = "button";
         body.append(submitButton);
         body.append('<br/>');
      
         const submit = document.getElementById("submit");
         submit.addEventListener("click", function( event ) {
            //Adding data to the planets array
            self.planets.push(new Planet(String(newPlanetSpeed.value), String(newPlanetColour.value), String(newPlanetRadii.value / 849.46666667), 
            String(newPlanetOrbit.value), String(newPlanetName.value).replace(/ /g, "")));
            planetNames.push(String(newPlanetName.value).replace(/ /g, ""));
            planetColors.push(String(newPlanetColour.value));
            planetRadii.push(String(newPlanetRadii.value / 849.46666667));
            planetOrbit.push(String(newPlanetOrbit.value));
            planetSpeed.push(String(newPlanetSpeed.value));

            //Clear inputs
            newPlanetName.value = '';
            newPlanetColour.value = '';
            newPlanetRadii.value = '';
            newPlanetOrbit.value = '';
            newPlanetSpeed.value = '';
      
            const DOMtable = document.getElementById("table" + String(self.id));
            DOMtable.remove();
            self.displayPlanets();
      
         });
      
         body.append('<br/>');
         body.append('<br/>');
         body.append('<br/>');
      }
   }
   global.Orbit = Orbit;
})(window, window.document, $);



