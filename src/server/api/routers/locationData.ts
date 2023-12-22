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
    // create: publicProcedure
    //     .input(z.object({
    //         lat: z.number(),
    //         lng: z.number(),
    //     })).query(async({ctx, input})=>{
    //         try{
    //             const locationDetails = locationData(input.lat, input.lng);
    //             const location = await prisma.locationData.create({
    //                 data:{
                        
    //                 }
    //             })
    //         }catch(error){

    //         }
    //     })
})