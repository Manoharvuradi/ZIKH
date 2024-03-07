import { ICrimeTip } from "Y/redux/crimeTips/state";
import { crimeCMS } from "Y/services/crime-tip-cms/instances";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body: ICrimeTip = req.body;
    try{
        // const userAuth = req.query.userAuth as IUserAuth;
        const tipId = await crimeCMS.getTip(body);
        return tipId;

    }catch(error: any){
        throw new Error("tip id faild");
    }
}
export default handler;