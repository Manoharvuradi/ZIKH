import { TRPCError } from "@trpc/server";
import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import { appRouter } from "Y/server/api/root";
import { createTRPCContext } from "Y/server/api/trpc";
import { NextApiRequest, NextApiResponse } from "next";

const CrimeTip = async (req: NextApiRequest, res: NextApiResponse) => {
    const ctx = await createTRPCContext({ req, res });
    const caller = appRouter.createCaller(ctx);
    if (req.method === "POST") {
        try {
            const searchCity = await caller.searchCity.create(req.body);
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
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    } else {
        res.status(405).json({ status: false, message: "Method Not Allowed" });
    }
}

export default CrimeTip;