import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ShowDataAddModel from '../Modal';

interface ILocationMarker {
   setAddDataModel: (open: boolean) => void;
   setCoordinates: (coorditnates: [number, number]) => void;
}

function LocationMarker({
   setAddDataModel,
   setCoordinates
}: ILocationMarker) {
   const [position, setPosition] = useState<any>(null);
   const map = useMapEvents({
      click(e) {
         setPosition(e.latlng);
         setCoordinates([e.latlng.lat, e.latlng.lng]);
         map.locate();
      },
      locationfound(e) {
         setPosition(e.latlng)
      },
   })


   return position === null ? null : (
      <Marker position={position} eventHandlers={{ click: () =>{ setAddDataModel(true)} }}>
         <Popup>You are here</Popup>
      </Marker>
   )
}

const Map = () => {
   const [addDataModel, setAddDataModel] = useState<Boolean>(false);
   const [coorditnates, setCoordinates] = useState<[number, number]>();
   return (
      <>
         <div className='flex flex-row'>
            <div className='w-full border-r-2 border-solid border-gray-300'>
               <MapContainer style={{ height: "100vh" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LocationMarker setAddDataModel={setAddDataModel} setCoordinates={setCoordinates}/>
               </MapContainer>
            </div>
            <ShowDataAddModel addDataModel={addDataModel} />
         </div>
      </>
   )
}

export default Map;