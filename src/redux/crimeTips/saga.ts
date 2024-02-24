import { Action } from "redux";
import { all, put, takeLatest } from "redux-saga/effects";
import { crimeTipActions, getCrimeTipDetailsFailure } from "./acrions";
import axios, { AxiosResponse } from "axios";
import { API_URLS } from "Y/utils/constants/crimetip";

function* submitCrimeTip(action: Action<any>): Generator {
    try {
        const payload = action;
        console.log("payload", payload);
        const response: AxiosResponse | any = yield axios.post(API_URLS.crimetip.create, payload, { baseURL: "/" });
        console.log("response", response);
        // if(response.)
    } catch (error) {
        console.log("error", error);
        yield put(
            getCrimeTipDetailsFailure("Something went wrong")
        )
    }
}
function* crimeTipSubmission(): Generator {
    yield all([
        takeLatest(
            crimeTipActions.CREATE_CRIME_TIP,
            submitCrimeTip
        ),
    ])
}
export default crimeTipSubmission;