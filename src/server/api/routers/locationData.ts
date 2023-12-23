import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { locationData } from "Y/server";
import { prisma } from "Y/server/db";

export const locationDataRouter = createTRPCRouter({
    list:publicProcedure
        .input(z.object({
            lat: z.number(),
            lng: z.number(),
        })).query(async({ctx, input})=>{
            try{
               const locationDetails = await locationData(input.lat, input.lng);
            return locationDetails;
            }catch(error){
                console.log(error);
            }
        }),
    create: publicProcedure
        .input(locationDataSchema()).query(async({ctx, input}: any)=>{
            try{
                const locationDetails = await locationData(input.lat, input.lng);
                const {components, ...rest} = locationDetails.results[0];
                const location = await prisma.locationData.create({
                    data:{
                        lat: input.lat,
                        lng: input.lng,
                        crimeType: input.crimeType,
                        description: input.description,
                        cityDetails:{
                            category: components.category,
                            city: components.city,
                            cityDistrict: components.city_district,
                            continent: components.continent,
                            country: components.country,
                            countryCode: components.country_code,
                            neighbourhood: components.neighbourhood,
                            postCode: components.postCode,
                            road: components.road,
                            state: components.state,
                        }
                    }
                })
            }catch(error){

            }
        })
})

function locationDataSchema(){
    return z.object({
        lat: z.number(),
        lng: z.number(),
        crimeType: z.string(),
        description: z.string().optional(),
        cityDetails: z.object({
            category: z.string().optional(),
            city: z.string().optional(),
            cityDistrict: z.string().optional(),
            continent: z.string().optional(),
            country: z.string().optional(),
            countryCode: z.string().optional(),
            neighbourhood: z.string().optional(),
            postCode: z.string().optional(),
            road: z.string().optional(),
            state: z.string().optional(),
        }).optional()
    })
}