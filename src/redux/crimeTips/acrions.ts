import { Action } from "redux";

interface CustomAction<T> extends Action<any> {
    type: string;
    payload: T;
    onApiSuccessCallback: () => void;
}

export const crimeTipActions = {
    GET_CRIME_TIP: "GET_CRIME_TIP",
    GET_CRIME_TIP_SUCCESS: "GET_CRIME_TIP_SUCCESS",
    GET_CRIME_TIP_FAILURE: "GET_CRIME_TIP_FAILURE",
}

// export const getCrimeTipDetails = (data:any) => ({
//     type: crimeTipActions.GET_CRIME_TIP,
//     payload: data
// });

export const getCrimeTipDetails = (
    request: any,
    onApiSuccessCallback: () => void
): CustomAction<any> => {
    return {
        type: crimeTipActions.GET_CRIME_TIP,
        payload: request,
        onApiSuccessCallback,
    };
};

export const getCrimeTipDetailsSuccess = (data:any) => ({
    type: crimeTipActions.GET_CRIME_TIP_SUCCESS,
    payload: data
});

export const getCrimeTipDetailsFailure = (message: any) => ({
    type:crimeTipActions.GET_CRIME_TIP_FAILURE,
    payload: message
})