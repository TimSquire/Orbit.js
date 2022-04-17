"use strict"
const orbit = new Orbit(screen.width / 2, 800, 20);
orbit.orbit(['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']);
orbit.planetInfo();

const orbit2 = new Orbit(((screen.width / 4) * 3) - 100, 1800, 20, '#aa66cc');
const pluto = orbit2.makePlanet(33, 'black', 1062, 330, 'pluto');
orbit2.orbit(['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', pluto]);
orbit2.displayPlanets();
orbit2.planetInfo();

const orbit3 = new Orbit(((screen.width / 4) * 3) - 100, 2800, 20, '#33FF66');
const apes = orbit2.makePlanet(26, 'black', 30000, 280, 'planetOfTheApes');
orbit3.orbit(['mercury', 'venus', 'earth', 'mars', 'jupiter', apes]);
orbit3.addPlanet();
orbit3.displayPlanets();
orbit3.planetInfo();