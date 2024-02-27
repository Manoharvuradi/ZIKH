export const crimeTipInputs = [
    {
        label:"Address or location",
        name: "location",
        type: "text",
        required: true
    },
    {
        label: "City",
        name: "city",
        type: "text",
        required: true
    },
    {
        label: "State",
        name: "state",
        type: "text",
        required: true
    },
    {
        label: "Zip",
        name: "zip",
        type: "number",
        required: true
    },
]

export const API_URLS = {
    crimetip: {
        create:"/api/crimetip/create",
    },
    searchByState:{
        create:"/api/seachByState/create",
    }
}