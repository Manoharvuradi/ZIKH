import { all, fork } from "redux-saga/effects";
import crimeTipSubmission from "./crimeTips/saga";

function* rootSaga() {
    yield all([
        fork(crimeTipSubmission)
    ])
}
export default rootSaga;