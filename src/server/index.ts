import { env } from "Y/env.mjs";

export const locationData = (lat: number, lng: number) => {
    async function fetchData() {
        try{
            const location = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat.toFixed(4)}+${lng.toFixed(4)}&key=${env.API_KEY}`);
            if(!location.ok){
                throw new Error(`HTTP error! Status: ${location.status}`)
            }
            const locatedDetails = await location.json();
            return locatedDetails;
        }catch(error: any){
            console.error('Error fetching data:', error.message);
        }
    }
    const located = fetchData();
    return located;
}