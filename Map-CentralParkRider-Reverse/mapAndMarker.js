
const mapDiv = document.createElement('div');
mapDiv.id = 'map';
const body = document.getElementById('content');
body.appendChild(mapDiv);

//step 1
mapboxgl.accessToken = '//insert mapbox access token here within quotes//';

//step 2
var map = new mapboxgl.Map({
    container: 'map', // div id
    style: 'mapbox://styles/mapbox/streets-v11', // style: change 'streets' to 'outdoors' etc to change up the style of the map
    center: [-73.965152, 40.782124], // location [lng, lat] for center of the map display
    zoom: 13 // zoom in/out - higher number zooms in, lower zooms out
});

//step 3
const markerDiv = document.createElement('div');
markerDiv.className = 'bicycle-marker';

var bicycleMarker = new mapboxgl.Marker(markerDiv)
    .setLngLat([-73.969315, 40.785335])
    .addTo(map)

//step 4
const route = [
    [-73.969315, 40.785335], // this is the starting point, I added it to the array for the journey back, but if it was a one way, we wouldn't need to include this coordinate or else the first setInterval iteration would not move the rider
    [-73.957599, 40.800481], 
    [-73.949182, 40.796972], 
    [-73.960519, 40.782286],  
    [-73.973322, 40.764973], 
    [-73.981052, 40.768224],  
    [-73.969315, 40.785335]
    ];


var counter = 1 // start counter at one because bus marker is already at location [0] in the busStops array via line 23 
var reverse = false;

//Step 5
function moveRider(){
    setInterval(()=>{
        if (reverse) {
            bicycleMarker.setLngLat(route[counter])
            counter--;
          } else {
            bicycleMarker.setLngLat(route[counter])
            counter++;
          }
        
        if (
            counter >= route.length - 1 || // this denotes an or operator
            counter === 0
            )
            {
            reverse = !reverse;
          }
    }, 1000)
}




// SOME MAP STYLE BELOW
// mapbox://styles/mapbox/streets-v11
// mapbox://styles/mapbox/outdoors-v11
// mapbox://styles/mapbox/light-v10
// mapbox://styles/mapbox/dark-v10
// mapbox://styles/mapbox/satellite-v9
// mapbox://styles/mapbox/satellite-streets-v11

// function moveBus(){
    // busStops.forEach((element, index)=>{
        // setTimeout(()=>{
            // why does this have to be greater than or equal to? why cant it just be equal to?
            //if(index >= busStops.length){
                //return;
            //}
            //else{
                //markerMIT.Market.setLngLat([element])
                //markerMIT.Marker.addto(map)
                //moveBus();
            //}
        //}, 1000)
    //})
//}


//if (counter >= busStops.length) {
    //return;
//}
//else {
    //busMarker.setLngLat(busStops[counter])
    //counter++;
    //moveBus();
//}