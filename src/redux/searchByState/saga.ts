import { all, put, takeLatest } from "redux-saga/effects";
import { addStateFailure, searchByStateActions } from "./actions";
import { CustomAction } from "../crimeTips/acrions";
import axios, { AxiosResponse } from "axios";

function* addState(action:CustomAction<any>): Generator {
    try {
        const payload = action;
        const response: AxiosResponse | any = yield axios.post("/api/seachByState/create", payload, { baseURL: "/" });
        return response;
    } catch (error) {
        yield put(
            addStateFailure("Something went wrong")
        );
        throw new Error("error while adding state, addState");
    }
}

function* addStateSaga() : Generator{
    yield all([
        takeLatest(
            searchByStateActions.CREATE_SEARCH_BY_STATE,
            addState
        )
    ])
}

export default addStateSaga;