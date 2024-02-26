import { ICrimeTip } from "Y/redux/crimeTips/state";
import { crimeCMSClient } from "../crime-tip-cms/client";
import { API_URLS } from "Y/utils/constants/crimetip";

class CrimeCMS {
    
    /**
     * get crime tip
     * @param data
     * @returns
     */
    async getTip(payload: ICrimeTip) {
        const res = await crimeCMSClient(API_URLS.crimetip.create,"post", payload);
        if(res.status == 200 && res.data.data) {
            return res.data.data;
        }
        return null;
    }

   
}

export default CrimeCMS;
