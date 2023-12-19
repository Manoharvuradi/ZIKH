import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const credentialUserRouter = createTRPCRouter({
    create:protectedProcedure
        .input(z.object({

        })).mutation(async({input,ctx})=>{
            try{
                
            }catch(error){
                
            }
        })
})