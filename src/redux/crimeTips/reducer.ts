import { AnyAction } from "redux";
import { ICrimeTipState, initCrimeTipState } from "./state";
import { crimeTipActions } from "./acrions";

export default function reducer(
    state: ICrimeTipState = initCrimeTipState,
    action: AnyAction
): ICrimeTipState {
   switch(action.type){
       case crimeTipActions.GET_CRIME_TIP:
        return {
            ...state,
            crimeTip: action.payload,
            crimeTipLoading: false,
            crimeTipFailed: false,
            crimeTipSuccess: false
        }
       case crimeTipActions.GET_CRIME_TIP_SUCCESS:
        return{
            ...state,
            crimeTip: action.payload,
            crimeTipLoading: false,
            crimeTipFailed: false,
            crimeTipSuccess: true
        }
       case crimeTipActions.GET_CRIME_TIP_FAILURE:
        return{
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