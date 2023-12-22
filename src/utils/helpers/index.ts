export function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

// export const locationData = (lat: number, lng: number) => {
//     const location = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=c5da44832e53401fba7b72c1f6bab412`;
//     return location;
// }