import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const crimeTipRouter = createTRPCRouter({
    list:publicProcedure
        .query(async ({ctx})=>{
            return await ctx.prisma.crimeTip.findMany({
                orderBy:{
                    createdAt: 'desc'
                }
            });
        }),
    create: publicProcedure
        .input(crimeTipSchema()).mutation(async ({ ctx, input }: any) => {
            try{
                const response = await ctx?.prisma.crimeTip.create({
                    data:{
                        ...input
                    }
                })
                return response;
            }catch(error: any){
                throw new Error(error.message);
            }
        }),

    show: publicProcedure
        .input(z.number()).query(async ({ ctx, input }) => {
            // console.log("input)))))))))))))))))))))))))))))))", typeof input);
            try{
                const crimeTipShowResponse = await ctx?.prisma.crimeTip.findFirst({
                    where:{
                        id: Number(input),
                    }
                });
                return crimeTipShowResponse
            }catch(error: any){
                throw new Error(error);
            }
        })
})

function crimeTipSchema() {
    return z.object({
        location: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        latitude: z.number(),
        longitude: z.number(),
        tip: z.string().optional(),
        personalInfo: z.string().optional(),
        addtionalInfo: z.string().optional(),
    })
}