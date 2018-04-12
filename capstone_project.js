//adding map with LA coordinates using mapbox 

mapboxgl.accessToken = 'pk.eyJ1IjoiYWhhbGthIiwiYSI6ImNqNmZpbzFjcjJuMnozMmxta2VhOWcwenkifQ.EwPH0ge3YE3AnkCxjw7HPw'; 
var LA=[-118.35,34.03],DTLA=[-118.238, 34.02],cs=[-118.415, 33.965],china=[-118.34, 34.095],sm=[-118.479, 33.99],hwsign=[-118.3, 34.12],bc=[-118.3774, 34.065];
//var mybrk=document.createElement('br');


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: LA,
    zoom: 10.5,
});

var markersm = new mapboxgl.Popup({offset:25})
    .setHTML('<h4>Santa Monica / Venice Beaches <br/> Distance from Codesmith: SM: 9.6 miles  VB: 4.7 miles </h4> The Santa Monica and Venice beaches should be a definite stop during your stay in LA.  There are many attractions along the boardwalk and some very interesting people (You have to see to understand).  There are sporting courts, skateparks, and walkways on the edge of the beach for you to enjoy.  Many impressive gymnists and acrobats show up and help others while showing off their skills near Muscle Beach and the Original Muscle Beach. </br></br> The pier in Santa Monica is also a great destination to visit for its beautiful pier, views, and mini amusment park featuring a roller coaster and ferris wheel.  Also, this is a great place to watch the sunset over the mountains towards the North-West.  Finally, there are many great restuarants and bars in the town so it is definitely worth your while to explore that area.');

var elementsm=document.createElement('div');
elementsm.id = 'markersm';



new mapboxgl.Marker(elementsm, {offset:[-25,-25]})
    .setLngLat(sm)
    .setPopup(markersm)
    .addTo(map);



var markerchina = new mapboxgl.Popup({offset:25})
    .setHTML('<h4>Chinese Theater and Hollywood Walk of Fame <br/> Distance from Codesmith: 14.8 miles </h4> The Chinese Theatre and Hollywood Blvd. are very popular tourist attractions.  The historical Chinese Theater has over 200 celebrity autographs, handprints, and footprints in the concrete of the forecourt famously known as the Forecourt of the Stars.  In the same area Hollywood Blvd features the Star Walk of Fame where famous actors, directors, artists, ect. have stars dedicated to them in the sidewalk.  There are also many interesting shops, bars, and resturants in the area especailly on Hollywood Blvd and Sunset Blvd.  A good place to see the Hollywood sign is from the rear deck of Highland Mall.');

    var elementchina=document.createElement('div');
    elementchina.id = 'markerchina';
    
new mapboxgl.Marker(elementchina, {offset:[-25,-25]})
    .setLngLat(china)
    .setPopup(markerchina)
    .addTo(map);



var markersign = new mapboxgl.Popup({offset:25})
    .setHTML("<img src='Hollywood.jpg' alt='Hollywood Sign' style='width:304px;height:228px;'><br/><h4>Hollywood Sign <br/>Distance from Codesmith: 19.6 miles </h4> The Hollywood sign is one of the most famously known attractions in LA.  It was erected in 1923 and has been popular ever since.  <br/> DISCLAIMER*** It is only lit up at night on special occasions...<br/> There are many hiking trails in the area near the sign.  Franklin Canyon Site Trail is recommeneded as an easygoing fun trail.  Berman Trail being a little more intense if you're up for the challenge.")

    var elementsign=document.createElement('div');
    elementsign.id = 'markersign';
    
new mapboxgl.Marker(elementsign, {offset:[-25,-25]})
    .setLngLat(hwsign)
    .setPopup(markersign)
    .addTo(map);
    



var markercs = new mapboxgl.Popup({offset:25})
    .setHTML("<h4>'CODESMITH <br/> 5300 Beethoven Street PH <br/><a target='_blank' href='https://www.codesmith.io/'>Click Here to visit the Codesmith website!</a></h4> Codesmith provides students with a great opportunity to learn how to code in a fun yet challenging way.")

var elementcs=document.createElement('div');
elementcs.id = 'markercs';

new mapboxgl.Marker(elementcs, {offset:[-25,-25]})
.setLngLat(cs)
.setPopup(markercs)
.addTo(map);


var markerdt = new mapboxgl.Popup({offset:25})
    .setHTML("<h4>Downtown LA <br/> Distance from Codesmith: 17.1 miles</h4>Downtown Los Angeles is filled with amazing places.. and food. There are too many to go into detail about but here is a list of some you may want to research.</br></br>Walt Disney Concert Hall, Little Tokyo, Staples Center, Musuem of Contemporary Art, Grammy Museum, Angels Flight, U.S. Bank Tower, Microsoft Theater, and Orpheum Theatre.  </br></br>This is not a full list but LA needs to be explored to find all of its hidden wonders.");

var elementdt=document.createElement('div');
elementdt.id = 'markerdt';

new mapboxgl.Marker(elementdt, {offset:[-25,-25]})
.setLngLat(DTLA)
.setPopup(markerdt)
.addTo(map);


var markerbc = new mapboxgl.Popup({offset:25})
    .setHTML('<h4>Beverly Center <br/> Distance from Codesmith: 11.2 miles</h4> If you like shopping and possibly spending all your money, you should visit the Beverly Center.  There are over 100 specialty (expensive) stores that show off the Californian styles and fashion.  If you already spent all your money traveling here do not worry, because the area just looks amazing and it could be fun to just window shop for those $50,000+ Rolex watches.  </br></br>  Aside from the shops, you are in Beverly Hills.  Walk around a little to see amazing homes, cars, and all the other fancy things you mostly only see in movies.  From here you are also not too far from Universal Studios in the north... but that might not be something you could see while you are studying at Codesmith :^).');

var elementbc=document.createElement('div');
elementbc.id = 'markerbc';

new mapboxgl.Marker(elementbc, {offset:[-25,-25]})
.setLngLat(bc)
.setPopup(markerbc)
.addTo(map);

// // adding markers
//     map.on('load', function () {
        
//         map.addLayer({
//             "id": "places",
//             "type": "symbol",
//             "source": {
//                 "type": "geojson",
                
//                 "data": {
//                     "type": "FeatureCollection",
//                     "features": [{
//                         "type": "Feature",
//                         "properties": {
//                             "description": "Santa Monica / Venice Beach <br/> Distance from Codesmith: SM:9.6 miles VB:4.7 miles",
//                             "icon": "star",	
//                         },
//                         "geometry": {
//                             "type": "Point",
                            
//                             "coordinates": [-118.49, 34.01]
//                         },
                        
//                     }, {
//                         "type": "Feature",
//                         "properties": {
//                             "description": "Chinese Theatre <br/> Distance from Codesmith: 14.8 miles",
//                             "icon": "star"
//                         },
//                         "geometry": {
//                             "type": "Point",
//                             "coordinates": [-118.34, 34.102]
//                         }
//                     }, {
//                         "type": "Feature",
//                         "properties": {
//                             "description": "CODESMITH <br/> 5300 Beethoven Street PH <br/><a target='_blank' href='https://www.codesmith.io/'>Click Here to visit the Codesmith website!</a>",
//                             "icon": "star"
//                         },
//                         "geometry": {
//                             "type": "Point",
//                             "coordinates": [-118.415, 33.978]
//                         }
//                     }, {
//                         "type": "Feature",
//                         "properties": {
//                             "description": "<img src='Hollywood.jpg' alt='Hollywood Sign' style='width:304px;height:228px;'><br/>Hollywood Sign <br/>Distance from Codesmith: 19.6 miles",
//                             "icon": "star"
//                         },
//                         "geometry": {
//                             "type": "Point",
//                             "coordinates": [-118.322, 34.13]
//                         }
//                     }, {
//                         "type": "Feature",
//                         "properties": {
//                             "description": "Downtown LA<br/> Distance from Codesmith: 17.1 miles",
//                             "icon": "star"
//                         },
//                         "geometry": {
//                             "type": "Point",
//                             "coordinates": [-118.238, 34.057]
//                         }
//                     }, {
//                         "type": "Feature",
//                         "properties": {
//                             "description": "Beverly Center <br/> Distance from Codesmith: 11.2 miles",
//                             "icon": "star"
//                         },
//                         "geometry": {
//                             "type": "Point",
//                             "coordinates": [-118.3774, 34.0749]
//                         }
//                     }, 
//                     ]
//                 }
//             },
//             "layout": {
//                 "icon-image": "{icon}-15",
//                 "icon-allow-overlap": true
//             }
//         });
//     });

    // map.on('click', 'places', function (e) {
    //     new mapboxgl.Popup()
    //         .setLngLat(e.features[0].geometry.coordinates)
    //         .setHTML(e.features[0].properties.description)
    //         .addTo(map);
    // });

    // map.on('mouseenter', 'places', function () {
    //     map.getCanvas().style.cursor = 'pointer';
    // });

    // // Change it back to a pointer when it leaves.
    // map.on('mouseleave', 'places', function () {
    //     map.getCanvas().style.cursor = '';
    // });
//});