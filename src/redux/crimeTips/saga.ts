import { Action } from "redux";
import { all, put, takeLatest } from "redux-saga/effects";
import { CustomAction, crimeTipActions, getCrimeTipDetailsFailure } from "./acrions";
import axios, { AxiosResponse } from "axios";
import { API_URLS } from "Y/utils/constants/crimetip";

function* submitCrimeTip(action: CustomAction<any>): Generator {
    try {
        const payload = action;
        const response: AxiosResponse | any = yield axios.post("api/crimetip/create", payload, { baseURL: "/" });
        return response;
    } catch (error) {
        yield put(
            getCrimeTipDetailsFailure("Something went wrong")
        )
        throw new Error("error at submit Crime tip, submitCrimeTip");
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