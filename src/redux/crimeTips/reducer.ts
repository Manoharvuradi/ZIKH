import { Action, AnyAction } from "redux";
import { ICrimeTipState, initCrimeTipState } from "./state";
import { crimeTipActions } from "./acrions";

interface CustomAction<T> extends Action<any> {
    type: string;
    payload: T;
    onApiSuccessCallback?: () => void;
}
export default function reducer(
    state: ICrimeTipState = initCrimeTipState,
    action: CustomAction<any>
): ICrimeTipState {
    console.log("reducer", state, action.type);
    switch (action.type) {
        case crimeTipActions.CREATE_CRIME_TIP:
            console.log("state",state);
            console.log("action",action);
            return {
                ...state,
                crimeTip: action.payload,
                crimeTipLoading: false,
                crimeTipFailed: false,
                crimeTipSuccess: false
            }
        case crimeTipActions.CREATE_CRIME_TIP_SUCCESS:
            console.log("action", action.type);	
            return {
                ...state,
                crimeTip: action.payload,
                crimeTipLoading: false,
                crimeTipFailed: false,
                crimeTipSuccess: true
            }
        case crimeTipActions.CREATE_CRIME_TIP_FAILURE:
            console.log("action", action.type);
            return {
                ...state,
                crimeTip: null,
                crimeTipLoading: false,
                crimeTipFailed: true,
                crimeTipSuccess: false,
                getCrimeTipAlertMessage: action.payload
            }
        default: return state
    }
}