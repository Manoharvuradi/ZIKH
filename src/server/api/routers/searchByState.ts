import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const seachByStateRouter = createTRPCRouter({
    list: publicProcedure
        .query(async ({ ctx }) => {
            return await ctx.prisma.searchByState.findMany();
        }),
    create: publicProcedure
        .input(z.object({
            stateName: z.string()
        })).mutation(async ({ ctx, input }) => {
            try {
                const response = await ctx.prisma.searchByState.create({
                    data: {
                        stateName: input.stateName
                    }
                })
                return response;
            } catch (error: any) {
                throw new Error(error);
            }
        })
})