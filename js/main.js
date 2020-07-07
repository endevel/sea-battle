console.log("App is running . . .")

let root = document.getElementById("root");
let tacticMap = document.createElement('div') //<div class="tactic-map">Tactic map</div>
tacticMap.className = 'tactic-map'

let shipLocation = document.createElement('div')
shipLocation.className = 'ship-location'

let shipLocation2 = document.createElement('div')
shipLocation2.className = 'ship-location'

tacticMap.appendChild(shipLocation);
tacticMap.appendChild(shipLocation2);

root.appendChild(tacticMap);

