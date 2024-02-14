import { Action } from "redux";
import { all, put, takeLatest } from "redux-saga/effects";
import { crimeTipActions, getCrimeTipDetailsFailure } from "./acrions";

function* submitCrimeTip(action: Action<any>): Generator {
    try{

    }catch(error){
        yield put(
            getCrimeTipDetailsFailure("Something went wrong")
        )
    }
}
function* crimeTipSubmission(): Generator{
    yield all([
        takeLatest(
            crimeTipActions.GET_CRIME_TIP,
            submitCrimeTip
        ),
    ])
}
export default crimeTipSubmission;