import { TRPCError } from "@trpc/server";
import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import { appRouter } from "Y/server/api/root";
import { createTRPCContext } from "Y/server/api/trpc";
import { NextApiRequest, NextApiResponse } from "next";

const CrimeTipListHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const ctx = await createTRPCContext({ req, res });
    const caller = appRouter.createCaller(ctx);
    if (req.method === "GET") {
        try {
            const {id} = req.query;
            const searchCity = await caller.searchCity.list(Number(id));
            res.status(200).json({ status: true, data: searchCity });
        } catch (cause) {
            if (cause instanceof TRPCError) {
                const httpCode = getHTTPStatusCodeFromError(cause);
                if (httpCode === 400) {
                    let errorMessage = JSON.parse(cause.message);
                    cause.message = errorMessage;
                }
                return res
                    .status(httpCode)
                    .json({ status: false, message: cause.message });
            }
        }
    } else {
        res.status(405).json({ status: false, message: "Method Not Allowed" });
    }
}

export default CrimeTipListHandler;