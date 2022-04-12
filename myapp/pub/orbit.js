let planets = [];

function orbit(sun) {

   //Drawing the sun
    const Drawsun = document.createElement('div')
    Drawsun.setAttribute("id", "sun");
    Drawsun.style = 'height: ' + String(sun.radius) + 'px; width: ' + String(sun.radius) + 'px; background-color: orange; border-radius: 50%; position: absolute;'
    Drawsun.style.left = String(sun.x_position) + "px";
    Drawsun.style.top = String(sun.y_position) + "px";
    const body = $('body')
    body.append(Drawsun)

    function move() {
         
         //Orbit each planet in planets around sun
         for (let i = 0; i < planets.length; i++){
            //Modifying the planet DOM Element's position of the page to simulate orbit
            let x = sun.x_position + (planets[i].planetOrbitRadius *
                                 Math.cos(planets[i].orbit_angle*(Math.PI/180)));
            let y = sun.y_position + (planets[i].planetOrbitRadius *
                                 Math.sin(planets[i].orbit_angle*(Math.PI/180)));

            planets[i].orbit_angle += (10 / planets[i].orbitSpeed);
            if (planets[i].orbit_angle > 360) {
               planets[i].orbit_angle = 0;
            };

            const satellite = document.createElement('div')
            satellite.setAttribute("id", String(planets[i].planetName));
            satellite.style.height = String(planets[i].planetRadius) + "px";
            satellite.style.width = String(planets[i].planetRadius) + "px";
            satellite.style.left = String(x) + "px";
            satellite.style.top = String(y) + "px";
            satellite.style.backgroundColor = planets[i].planetColor;
            satellite.style.borderRadius = "50%";
            satellite.style.position = "absolute";
            if ($("#" + String(planets[i].planetName)).length > 0){
               const old_planet = 
               document.getElementById(String(planets[i].planetName));
               old_planet.remove();
            }
            body.append(satellite)
         }
         setTimeout(move, 5);
    };

       move();

};

 class Planet  {
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

 class Sun {
    constructor(){
       this.x_position = 580;
       this.y_position = 380;
       this.radius = 20;
    }
 }

 //Automativally add earth to planets

 planets.push(new Planet(10, 'blue', 15, 75, 'earth'));

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
   mercuryButton.id = "mercuryButton";
   mercuryButton.type = "checkbox";
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
   venusButton.id = "venusButton";
   venusButton.type = "checkbox";
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
   earthButton.id = "earthButton";
   earthButton.type = "checkbox";
   earthButton.className = "planet";
   earthButton.checked = true;
   body.append(earthButton);
   body.append('<br/>');

   //Mars Label
   const marsLabel = document.createElement("LABEL");
   marsLabel.innerText = "Mars: ";
   body.append(marsLabel);

   //Mars Button
   const marsButton = document.createElement("input");
   marsButton.name = "planet";
   marsButton.id = "marsButton";
   marsButton.type = "checkbox";
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
   jupiterButton.id = "jupiterButton";
   jupiterButton.type = "checkbox";
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
   saturnButton.id = "saturnButton";
   saturnButton.type = "checkbox";
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
   uranusButton.id = "uranusButton";
   uranusButton.type = "checkbox";
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
   neptuneButton.id = "neptuneButton";
   neptuneButton.type = "checkbox";
   neptuneButton.className = "planet";
   body.append(neptuneButton);
   body.append('<br/>');
   body.append('<br/>');
   body.append('<br/>');


   const buttons = document.getElementsByClassName("planet");

   for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('change', function handleClick() {
         if(buttons[i].checked) {
            //checked planet
            planets.push(new Planet(10, planetColors[planetNames.indexOf(String(buttons[i].id.slice(0, -6)))], 
            planetRadii[planetNames.indexOf(String(buttons[i].id.slice(0, -6)))], 
            planetOrbit[planetNames.indexOf(String(buttons[i].id.slice(0, -6)))], 
            buttons[i].id.slice(0, -6)));
            console.log(planets);
         } else {
            //unchecked planet
            for(let c = 0; c < planets.length; c++){
               if (planets[c].planetName == buttons[i].id.slice(0, -6)){
                  //remove planet from DOM
                  if ($("#" + String(planets[c].planetName)).length > 0){
                     const old_planet = 
                     document.getElementById(String(planets[c].planetName));
                     old_planet.remove();
                  }
                  planets.splice(c, 1);
               }
            }
         }
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




