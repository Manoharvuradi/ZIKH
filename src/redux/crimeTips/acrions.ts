import { request } from "http";
import { Action } from "redux";
import { ICrimeTip } from "./state";

interface CustomAction<T> extends Action<any> {
    type: string;
    payload: T;
    onApiSuccessCallback: () => void;
}

export const crimeTipActions = {
    CREATE_CRIME_TIP: "CREATE_CRIME_TIP",
    CREATE_CRIME_TIP_SUCCESS: "CREATE_CRIME_TIP_SUCCESS",
    CREATE_CRIME_TIP_FAILURE: "CREATE_CRIME_TIP_FAILURE",
}

// export const getCrimeTipDetails = (data:any) => ({
//     type: crimeTipActions.CREATE_CRIME_TIP,
//     payload: data
// });

export const getCrimeTipDetails = (
    request: any,
    onApiSuccessCallback: () => void
): CustomAction<any> => {
    return {
        type: crimeTipActions.CREATE_CRIME_TIP,
        payload: request,
        onApiSuccessCallback,
    };
};

export const createCrimeTipDetails = (
    crimeTipRegistrationState: ICrimeTip,
    onApiSuccessCallback: () => void
)=>{
    console.log("inside action", crimeTipRegistrationState);
    return {
        type: crimeTipActions.CREATE_CRIME_TIP,
        crimeTipRegistrationState,
        onApiSuccessCallback,
    }
}

export const getCrimeTipDetailsSuccess = (data: any) => ({
    type: crimeTipActions.CREATE_CRIME_TIP_SUCCESS,
    payload: data
});

export const getCrimeTipDetailsFailure = (message: any) => ({
    type: crimeTipActions.CREATE_CRIME_TIP_FAILURE,
    payload: message
})