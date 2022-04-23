import React from 'react'
import {Box} from "@chakra-ui/react";
import  GoogleMapReact  from 'google-map-react';
const  Maps = ({coordinates,setCoordinates}) => {
  return (
    <Box width={'full'} height={'full'}>
   <GoogleMapReact 
   bootstrapURLKeys={{key : 'AIzaSyDavgnLVg0Pw0Ko_hRbqT4_VcHnloY9Sxk'}}
   defaultCenter={coordinates}
   center={coordinates}
   defaultZoom={10}
   margin={[50,50,50,50]}
   options={''}
   onChange={()=>{}}
   onChildClick={()=>{}}
   ></GoogleMapReact>

    </Box>
  )
}
export default Maps ;