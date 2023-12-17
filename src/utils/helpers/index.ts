import { env } from "process"

export const generateLocation = (lat: number, lng: number) => {
    const location = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${env.API_KEY}`
    console.log("location", location);
}