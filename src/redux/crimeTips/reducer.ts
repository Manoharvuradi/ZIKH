import { Action, AnyAction } from "redux";
import { ICrimeTipState, initCrimeTipState } from "./state";
import { crimeTipActions } from "./acrions";

interface CustomAction<ICrimeTipState> extends Action<any> {
    type: string;
    payload: ICrimeTipState;
    onApiSuccessCallback?: () => void;
}
export default function reducer(
    state: ICrimeTipState = initCrimeTipState,
    action: CustomAction<ICrimeTipState>
): ICrimeTipState {
    switch (action.type) {
        case crimeTipActions.CREATE_CRIME_TIP:
            return {
                ...state,
                crimeTip: action.payload,
                crimeTipLoading: false,
                crimeTipFailed: false,
                crimeTipSuccess: false
            }
        case crimeTipActions.CREATE_CRIME_TIP_SUCCESS:
            return {
                ...state,
                crimeTip: action.payload,
                crimeTipLoading: false,
                crimeTipFailed: false,
                crimeTipSuccess: true
            }
        case crimeTipActions.CREATE_CRIME_TIP_FAILURE:
            return {
                ...state,
                crimeTip: null,
                crimeTipLoading: false,
                crimeTipFailed: true,
                crimeTipSuccess: false,
                // getCrimeTipAlertMessage:
            }
        default: return state
    }
}