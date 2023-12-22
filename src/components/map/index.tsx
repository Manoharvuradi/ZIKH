import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ShowDataAddModel from '../Modal';
import { api } from 'Y/utils/api';
// import { locationData } from 'Y/utils/helpers';

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
         setPosition(e.latlng);
         setAddDataModel(true);
      },
   })


   return position === null ? null : (
      // <Marker position={position} eventHandlers={{ click: () => { setAddDataModel(true) } }}>
      //    <Popup>You are here</Popup>
      // </Marker>
      <></>
   )
}

const Map = () => {
   const [addDataModel, setAddDataModel] = useState<boolean>(false);
   const [coorditnates, setCoordinates] = useState<[number, number]>();
   const [locationDetails, setLocationDetails] = useState<any>();
   const [loading, setLoading] = useState(false);

   const {isLoading, data, error}: any = api.locationData.list.useQuery({ lat: Number(coorditnates?.[0]), lng: Number(coorditnates?.[1]) }, {enabled: addDataModel} )
   useEffect(() => {
      if (coorditnates && coorditnates?.length && data) {
        setLocationDetails(data);
      }
   }, [coorditnates, data]);

   return (
      <>
         <div className='flex flex-row'>
            <div className='w-full border-r-2 border-solid border-gray-300'>
               <MapContainer
                  style={{ height: "100vh" }}
                  center={[51.505, -0.09]}
                  zoom={13} scrollWheelZoom={true}
                  preferCanvas={true} attributionControl={true}
                  closePopupOnClick={true}
                  fadeAnimation={true}
                  transform3DLimit={50}
               >
                  <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LocationMarker setAddDataModel={setAddDataModel} setCoordinates={setCoordinates} />
               </MapContainer>
            </div>
            <ShowDataAddModel addDataModel={addDataModel} setAddDataModel={setAddDataModel} locationDetails={locationDetails?.results?.[0].components} />
         </div>
      </>
   )
}

export default Map;