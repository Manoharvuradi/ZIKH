import { env } from "process";

export function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

// export const locationData = (lat: number, lng: number) => {
//     const location = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=c5da44832e53401fba7b72c1f6bab412`;
//     return location;
// }

export const locationLatandLong = async (location: string): Promise<{ lat: number; lng: number }> => {
    const locate = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=c5da44832e53401fba7b72c1f6bab412`;

    try {
        const response = await fetch(locate);
        if (!response.ok) {
            throw new Error('Failed to fetch location data');
        }

        const data = await response.json();
        if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            return { lat, lng };
        } else {
            throw new Error('No results found for the location');
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
        throw error; // Rethrow the error to propagate it further
    }
}
