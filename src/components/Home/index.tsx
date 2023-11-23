import React, { useState } from "react";
React.useLayoutEffect = React.useEffect;
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from "@vis.gl/react-google-maps";


function Home() {
    const position = { lat: 53.54, lng: 10 };
    const [open, setOpen] = useState(false);
    return (
        <APIProvider apiKey="">
            <div style={{ height: "100vh", width: "100%" }}>
                <Map zoom={9} center={position} mapId="">
                    <AdvancedMarker position={position} onClick={() => { setOpen(true) }}>
                        <Pin />
                    </AdvancedMarker>
                    {open && (
                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>Info</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    )
}

export default Home;