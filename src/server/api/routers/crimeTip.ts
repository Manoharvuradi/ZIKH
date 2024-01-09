import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const crimeTipRouter = createTRPCRouter({
    create: publicProcedure
        .input(crimeTipSchema()).mutation(async ({ ctx, input }) => {
            try{
                // const response = await ctx?.prisma
            }catch(error){

            }
        })
})

function crimeTipSchema() {
    return z.object({
        location: z.string(),
        city: z.string(),
        state: z.string(),
        Zip: z.string(),
        latitude: z.number(),
        longitude: z.number(),
        tip: z.string(),
        personalInfo: z.string(),
        addtionalInfo: z.string(),
    })
}