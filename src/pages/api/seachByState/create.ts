
import { ICrimeTip } from "Y/redux/crimeTips/state";
import { ISearchByState } from "Y/redux/searchByState/state";
import { crimeCMS } from "Y/services/crime-tip-cms/instances";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body: ISearchByState = req.body;
    try {
        // const userAuth = req.query.userAuth as IUserAuth;
        const addingCity = await crimeCMS.addingCity(body);
        return addingCity;

    } catch (error: any) {
        throw new Error("tip id faild", error);
    }
}
export default handler;