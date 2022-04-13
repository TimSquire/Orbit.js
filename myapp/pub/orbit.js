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

   for(let i = 0; i < planetNames.length; i++){
      //Planet Label
      const planetLabel = document.createElement("LABEL");
      planetLabel.innerText = String(planetNames[i]) + ": ";
      body.append(planetLabel);

      //Planet Checkbox
      const planetButton = document.createElement("input");
      planetButton.name = "planet";
      planetButton.id = String(planetNames[i]) + "Button";
      planetButton.type = "checkbox";
      planetButton.className = "planet";
      body.append(planetButton);
      body.append('<br/>');

      if(String(planetNames[i]) == 'earth'){
         planetButton.checked = true;
      }
   }

   body.append('<br/>');
   body.append('<br/>');
   body.append('<br/>');


   const buttons = document.getElementsByClassName("planet");

   for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('change', function handleClick() {
         if(buttons[i].checked) {
            //checked planet
            planets.push(new Planet(20, planetColors[planetNames.indexOf(String(buttons[i].id.slice(0, -6)))], 
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

function addPlanet(){
   const body = $('body');

   //New Planet Name Label
   const nameLabel = document.createElement("LABEL");
   nameLabel.innerText = "Name of Planet: ";
   body.append(nameLabel);

   const newPlanetName = document.createElement("input");
   newPlanetName.id = "newPlanetName";
   newPlanetName.type = "text";
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
   body.append(newPlanetColour);
   body.append('<br/>');
   body.append('<br/>');

   const submitButton = document.createElement("input");
   submitButton.id = "submit";
   submitButton.type = "submit";
   submitButton.value = "Add New Planet!";
   body.append(submitButton);
   body.append('<br/>');

   const submit = document.getElementById("submit");
   submit.addEventListener("click", function( event ) {
      planets.push(new Planet(20, String(newPlanetColour.value), 15, 50, String(newPlanetName.value)));
      planetNames.push(String(newPlanetName.value));
      planetColors.push(String(newPlanetColour.value));
   });

}



