//Globals for modifying the planet DOM Element
let planetColor = 'blue';
let planetRadius = 15;
let planetOrbitRadius = 75
let planetName = 'earth';

function orbit(planet) {

    const sun = document.createElement('div')
    sun.setAttribute("id", "sun");
    sun.style = 'height: 40px; width: 40px; background-color: orange; border-radius: 50%; position: absolute;'
    sun.style.left = String(planet.x_position - 20) + "px";
    sun.style.top = String(planet.y_position - 20) + "px";
    const body = $('body')
    body.append(sun)

    function move() {

          //Modifying the planet DOM Element's position of the page to simulate orbit
          let x = planet.x_position+(planetOrbitRadius *
                               Math.cos(planet.orbit_angle*(Math.PI/180)));
          let y = planet.y_position+(planetOrbitRadius *
                               Math.sin(planet.orbit_angle*(Math.PI/180)));

          planet.orbit_angle += 1;
          if (planet.orbit_angle > 360) {
             planet.orbit_angle = 0;
          };

          const satellite = document.createElement('div')
          satellite.setAttribute("id", "planet");
          satellite.style.height = String(planetRadius) + "px";
          satellite.style.width = String(planetRadius) + "px";
          satellite.style.left = String(x) + "px";
          satellite.style.top = String(y) + "px";
          satellite.style.backgroundColor = planetColor;
          satellite.style.borderRadius = "50%";
          satellite.style.position = "absolute";
          if ($("#planet").length > 0){
            const old_planet = document.getElementById("planet");
            old_planet.remove();
          }
          body.append(satellite)
          setTimeout(move, planet.orbit_speed);
    };

       move();

    };

 class Planet  {
   constructor(x, y, s, n){
    this.x_position = x;
    this.y_position = y;
    this.orbit_angle = 0;
    this.orbit_speed = s;
   }
 };

 //Hardcoded data for each different planet in the solar system
const planetNames = ["mercury", "venus", "earth", "mars", "jupiter", "saturn",
"uranus", "neptune"];
const planetColors = ["#ada8a5", "#a57c1b", "blue", "#9C2E35", "#d8ca9d", 
"#ead6b8", "#d1e7e7", "#5b5ddf"];
const planetRadii = [5.745, 14.235, 15, 7.98, 75, 60, 32, 27];
const planetOrbit = [29.025, 54.225, 75, 114, 200, 250, 270, 300];

function displayPlanets(){
   const body = $('body')
   //Mercury Label
   const mercuryLabel = document.createElement("LABEL");
   mercuryLabel.innerText = "Mercury: ";
   body.append(mercuryLabel);

   //Mercury Button
   const mercuryButton = document.createElement("input");
   mercuryButton.name = "planet";
   mercuryButton.id = "mercury";
   mercuryButton.type = "radio";
   mercuryButton.className = "planet";
   body.append(mercuryButton);
   body.append('<br/>');

   //Venus Label
   const venusLabel = document.createElement("LABEL");
   venusLabel.innerText = "Venus: ";
   body.append(venusLabel);

   //Venus Button
   const venusButton = document.createElement("input");
   venusButton.name = "planet";
   venusButton.id = "venus";
   venusButton.type = "radio";
   venusButton.className = "planet";
   body.append(venusButton);
   body.append('<br/>');

   //Earth Label
   const earthLabel = document.createElement("LABEL");
   earthLabel.innerText = "Earth: ";
   body.append(earthLabel);

   //Earth Button
   const earthButton = document.createElement("input");
   earthButton.name = "planet";
   earthButton.id = "earth";
   earthButton.type = "radio";
   earthButton.className = "planet";
   body.append(earthButton);
   body.append('<br/>');

   //Mars Label
   const marsLabel = document.createElement("LABEL");
   marsLabel.innerText = "Mars: ";
   body.append(marsLabel);

   //Mars Button
   const marsButton = document.createElement("input");
   marsButton.name = "planet";
   marsButton.id = "mars";
   marsButton.type = "radio";
   marsButton.className = "planet";
   body.append(marsButton);
   body.append('<br/>');

   //Jupiter Label
   const jupiterLabel = document.createElement("LABEL");
   jupiterLabel.innerText = "Jupiter: ";
   body.append(jupiterLabel);

   //Jupiter Button
   const jupiterButton = document.createElement("input");
   jupiterButton.name = "planet";
   jupiterButton.id = "jupiter";
   jupiterButton.type = "radio";
   jupiterButton.className = "planet";
   body.append(jupiterButton);
   body.append('<br/>');

   //saturn Label
   const saturnLabel = document.createElement("LABEL");
   saturnLabel.innerText = "Saturn: ";
   body.append(saturnLabel);

   //Saturn Button
   const saturnButton = document.createElement("input");
   saturnButton.name = "planet";
   saturnButton.id = "saturn";
   saturnButton.type = "radio";
   saturnButton.className = "planet";
   body.append(saturnButton);
   body.append('<br/>');

   //Uranus Label
   const uranusLabel = document.createElement("LABEL");
   uranusLabel.innerText = "Uranus: ";
   body.append(uranusLabel);

   //Uranus Button
   const uranusButton = document.createElement("input");
   uranusButton.name = "planet";
   uranusButton.id = "uranus";
   uranusButton.type = "radio";
   uranusButton.className = "planet";
   body.append(uranusButton);
   body.append('<br/>');

   //Neptune Label
   const neptuneLabel = document.createElement("LABEL");
   neptuneLabel.innerText = "Neptune: ";
   body.append(neptuneLabel);

   //Neptune Button
   const neptuneButton = document.createElement("input");
   neptuneButton.name = "planet";
   neptuneButton.id = "neptune";
   neptuneButton.type = "radio";
   neptuneButton.className = "planet";
   body.append(neptuneButton);
   body.append('<br/>');
   body.append('<br/>');
   body.append('<br/>');


   const buttons = document.getElementsByClassName("planet");

   for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', function handleClick() {
         planetColor = planetColors[planetNames.indexOf(String(buttons[i].id))]
         planetRadius = planetRadii[planetNames.indexOf(String(buttons[i].id))]
         planetOrbitRadius = planetOrbit[planetNames.indexOf(String(buttons[i].id))]
         planetName = String(buttons[i].id);
      });
   }
}

function planetInfo() {
   const body = $('body')
   let sunElement = document.getElementById("sun");
   sunElement.addEventListener("mouseenter", function( event ) {
      para = document.createElement("p");
      para.setAttribute("id", "para");
      curPlanet = document.getElementById("planet");
      //para.style.top = String(sunElement.style.top.slice(0, -2)) + "px";
      //para.style.left = String(sunElement.style.left.slice(0, -2) * 1.8) + "px";
      //para.style.position = "absolute";

      para.innerText = planetName + " is " + String(planetNames.indexOf(String(planetName)) + 1) + 
      ` planets away from the sun! \n` + planetName + ` is also ` + String(((planetRadii[planetNames.indexOf(String(planetName))]) / 15) * 12742) + ` kilometers in diameter!`;
      body.append(para);
   })

   sunElement.addEventListener("mouseleave", function( event ) {
      if ($("#para").length > 0){
         const old_para = document.getElementById("para");
         old_para.remove();
       }
   })
}




