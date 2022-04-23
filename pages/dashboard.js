import React, { useState ,useEffect } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Spacer,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"

import MyChart from '../components/MyChart';
import MyChartBatonnet from '../components/MyChartBatonnet'
import Maps from '../components/Maps.js'
import NavBar from '../components/NavBar';
// import Map from '../components/Map';
//Map
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoieW91c2ZpbWVkIiwiYSI6ImNsMmJjcjNmeDBlN28zY3NjYWlmYzQxejUifQ.JjFJe6GhuJLQmK1z10u2yg";
// const map = new mapboxgl.Map({
//   container: "my-map",
//   style: "mapbox://styles/mapbox/streets-v11",
// });

export default function Dashboard() {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1);
    const [coordinates,setCoordinates]= useState({lat:0,long:0});
    const [pageIsMounted, setPageIsMounted] = useState(false);

    
    

    useEffect(() => {
        setPageIsMounted(true)
          const map = new mapboxgl.Map({
            container: "my-map",
            style: "mapbox://styles/mapbox/streets-v11",
            center : [54.426667,24.446667],
            zoom : 11.9
          });


          //PopUP
const popup = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([54.416667, 24.426667])
.setHTML('<h1>Main office</h1>')
.addTo(map);
          map.addControl(
            new mapboxgl.GeolocateControl({
              positionOptions: {
                enableHighAccuracy: true,
              },
              trackUserLocation: true,
            })
          );
//Marker 
// const mapboxClient = mapboxgl({ accessToken: mapboxgl.accessToken });
// mapboxClient.geocoding
// .forwardGeocode({
// query: 'Wellington, New Zealand',
// autocomplete: false,
// limit: 1
// })
// .send()
// .then((response) => {
// if (
// !response ||
// !response.body ||
// !response.body.features ||
// !response.body.features.length
// ) {
// console.error('Invalid response:');
// console.error(response);
// return;
// }
// const feature = response.body.features[0];
 
// const map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11',
// center: feature.center,
// zoom: 10
// });
 
// Create a marker and add it to the map.
// new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
// });
console.log(map,'maaaaap')
          map.on("load", function () {
            map.addSource("earthquakes", {
              type: "geojson",
              // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
              // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
              data:
                "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
              cluster: true,
              clusterMaxZoom: 14, // Max zoom to cluster points on
              clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
            });
          
            // map.addLayer({
            //   id: "clusters",
            //   ...
            // });
          
            // map.addLayer({
            //   id: "cluster-count",
            //   ...
            // });
          
            // map.addLayer({
            //   id: "unclustered-point",
            //   ...
            // });
          
            // inspect a cluster on click
            map.on("click", "clusters", function (e) {
              var features = map.queryRenderedFeatures(e.point, {
                layers: ["clusters"],
              });
              var clusterId = features[0].properties.cluster_id;
              map
                .getSource("earthquakes")
                .getClusterExpansionZoom(clusterId, function (err, zoom) {
                  if (err) return;
          
                  map.easeTo({
                    center: features[0].geometry.coordinates,
                    zoom: zoom,
                  });
                });
            });
          
            // When a click event occurs on a feature in
            // the unclustered-point layer, open a popup at
            // the location of the feature, with
            // description HTML from its properties.
            map.on("click", "unclustered-point", function (e) {
              var coordinates = e.features[0].geometry.coordinates.slice();
              var mag = e.features[0].properties.mag;
              var tsunami;
          
              if (e.features[0].properties.tsunami === 1) {
                tsunami = "yes";
              } else {
                tsunami = "no";
              }
          
              // Ensure that if the map is zoomed out such that
              // multiple copies of the feature are visible, the
              // popup appears over the copy being pointed to.
              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
              }
          
              new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(
                  "magnitude: " + mag + "<br>Was there a tsunami?: " + tsunami
                )
                .addTo(map);
            });
          
            map.on("mouseenter", "clusters", function () {
              map.getCanvas().style.cursor = "pointer";
            });
            map.on("mouseleave", "clusters", function () {
              map.getCanvas().style.cursor = "";
            });
          });
    }, [])


    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column","column"]}
            overflow="hidden"
            xs={12}
              sm={6}
              lg={4}
        >
            {/* Column 1 */}
            <Flex
                w={["100%", "100%", "100%", "100%", "100%"]}
                alignItems="center"
                // backgroundColor="#000000"
                // color="#fff"
                h={'10%'}
            >
                <NavBar></NavBar>
               
            </Flex>

            {/* Column 2 */}
            <Flex
                w={["100%", "100%", "100%", "100%", "100%"]}
                // p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
                color="black.300"
                backgroundColor="gray.100"
                h={'90%'}
            >
            <Flex id="my-map" w="100%" flex={'1'}></Flex>
               {/* //box gauche sup */}
               <Flex position={'absolute'} borderRadius={"20px"} w={"22%"} h={"5%"} marginTop={"30px"} marginLeft={"40px"} zIndex={"1"} flexDir={"row"}>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"20px"} p={"5px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                         <Flex flex={"0.5"} bg={"green.200"} borderRadius={"20px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <Text margin={'-13px 10px 10px'} color={"white"}>Active carpools</Text>
                 </Flex> </Flex>
                 {/* <Flex flex={"4"} bg={"red.200"} w={"100%"}><Text>hello 2 </Text></Flex> */}
             </Flex>
            {/* //box gauche Inf */}
             <Flex position={'absolute'} borderRadius={"4px"} w={"22%"} h={"65%"} marginTop={"80px"} marginLeft={"40px"} zIndex={"1"} flexDir={"column"}>
                 <Flex flex={"2"} bg={"#fff"} borderRadius={"5px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                 <img className="mb-4" alt="" width="100%" height="200" src="imagecarsRoad.jpg" />
                 </Flex>
                 <Flex flex={"4"} bg={"#ffffff"} w={"100%"} flexDir={"column"} borderBottom={"revert"} borderBottomColor={"green.200"}>
                 <Flex flex={"2"} bg={'#ffffff'} flexDir={"row"} >
                   <Flex flex={"1.5"} bg={'#ffffff'} flexDir={"column"} marginLeft={"5"}><Flex flex={"1"} ><Text fontSize='xs'> Car 53min</Text></Flex><Flex flex={"4"} ><img className="mb-4" alt="" width="50%" height="100%" src="shargil1.jpg" /></Flex><Flex flex={"1"}><Text fontSize='xs'> haider haier</Text></Flex></Flex>
                   <Flex flex={"4"} align={"center"}><Text fontSize={'xl'}>Harry Luckford</Text></Flex>
                   <Flex flex={"2"} bg={'#ffffff'} flexDir={"row"}><Flex flex={"2"} bg={'#ffffff'}></Flex><Flex flex={"2"} align={"center"}><Text fontSize={'2xl'}>43</Text></Flex></Flex>
                 </Flex>

                 <Flex flex={"2"}>
                   <Flex flex={"2"} bg={'#ffffff'}><img className="mb-4" alt="" width="70%" height="150" src="shargil1.jpg" /></Flex>
                   <Flex flex={"4"} align={"center"}><Text fontSize={'xl'}>Julian Baumagarter</Text></Flex>
                   <Flex flex={"2"} bg={'#ffffff'} flexDir={"row"}><Flex flex={"2"} bg={'#ffffff'}></Flex><Flex flex={"2"} align={"center"}><Text fontSize={'2xl'}>36</Text></Flex></Flex>
                 </Flex>

                 <Flex flex={"2"}bg={'#ffffff'}>
                 <Flex flex={"2"} bg={'#ffffff'}><img className="mb-4" alt="" width="70%" height="150" src="shargil1.jpg" /></Flex>
                   <Flex flex={"4"} align={"center"}><Text fontSize={'xl'}>Nazar Khan</Text></Flex>
                   <Flex flex={"2"} bg={'#ffffff'} flexDir={"row"}><Flex flex={"2"} bg={'#ffffff'}></Flex><Flex flex={"2"} align={"center"}><Text fontSize={'2xl'}>80</Text></Flex></Flex>
                 </Flex>

                 <Flex flex={"2"}>
                  <Flex flex={"2"} bg={'#ffffff'}><img className="mb-4" alt="" width="70%" height="150" src="shargil1.jpg" /></Flex>
                   <Flex flex={"4"} align={"center"}><Text fontSize={'xl'}>Olena Petruk</Text></Flex>
                   <Flex flex={"2"} bg={'#ffffff'} flexDir={"row"}><Flex flex={"2"} bg={'#ffffff'}></Flex><Flex flex={"2"} align={"center"}><Text fontSize={'2xl'}>31</Text></Flex></Flex>
                 </Flex>

                 <Flex flex={"2"} bg={'#ffffff'}>
                 <Flex flex={"2"} bg={'#ffffff'}><img className="mb-4" alt="" width="70%" height="150" src="shargil1.jpg" /></Flex>
                   <Flex flex={"4"} align={"center"}><Text fontSize={'xl'}>Judi Lee</Text></Flex>
                   <Flex flex={"2"} bg={'#ffffff'} flexDir={"row"}><Flex flex={"2"} bg={'#ffffff'}></Flex><Flex flex={"2"} align={"center"}><Text fontSize={'2xl'}>77</Text></Flex></Flex>
                 </Flex>
                 </Flex>
             </Flex>



                     {/* //box droite sup 1 */}
                     {/* <Flex position={'absolute'} borderRadius={"20px"} w={"22%"} h={"5%"} marginTop={"30px"} marginLeft={"1100px"} zIndex={"1"} flexDir={"row"}>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"20px"} p={"5px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                         <Flex flex={"0.5"} bg={"green.200"} borderRadius={"20px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <Text margin={'-13px 10px 10px'} color={"white"}>Origin locations</Text>
                 </Flex> </Flex> */}
                 {/* <Flex flex={"4"} bg={"red.200"} w={"100%"}><Text>hello 2 </Text></Flex> */}
             {/* </Flex> */}
             {/* //box droite Sup 2 */}
             {/* <Flex position={'absolute'} w={"22%"} h={"50%"} marginTop={"80px"} marginLeft={"1100px"} zIndex={"1"} flexDir={"column"}>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"4px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <h2 margin={"0 0 10px"}>Most popular offices</h2>
                 </Flex>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"4px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <h2 margin={"0 0 10px"}>Most popular offices</h2>
                 </Flex>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"4px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <h2 margin={"0 0 10px"}>Most popular offices</h2>
                 </Flex>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"4px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <h2 margin={"0 0 10px"}>Most popular offices</h2>
                 </Flex>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"4px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <h2 margin={"0 0 10px"}>Most popular offices</h2>
                 </Flex>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"4px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <h2 margin={"0 0 10px"}>Most popular offices</h2>
                 </Flex>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"4px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <h2 margin={"0 0 10px"}>Most popular offices</h2>
                 </Flex>
               
             </Flex> */}
                 {/* //box drte Inf */}
                 {/* <Flex position={'absolute'}  w={"22%"} h={"25%"} marginTop={"450px"} marginLeft={"1100px"} zIndex={"1"} flexDir={"column"}>
                 <Flex flex={"1"} bg={"#fff"} borderRadius={"4px"} p={"10px"} boxShadow={"0 1px 2px rgba(0,0,0,0.2)"} >
                     <h2 margin={"0 0 10px"}>Most popular carpool</h2>
                 </Flex>
               
             </Flex> */}
             
            </Flex>

        </Flex>
    )
}