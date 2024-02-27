import { CustomAction } from "../crimeTips/acrions";

export const searchByStateActions = {
    CREATE_SEARCH_BY_STATE: "CREATE_SEARCH_BY_STATE",
    CREATE_SEARCH_BY_STATE_SUCCESS: "CREATE_SEARCH_BY_STATE_SUCCESS",
    CREATE_SEARCH_BY_STATE_FAILURE: "CREATE_SEARCH_BY_STATE_FAILURE",
}

export const addState = (
    request: any,
    onApiSuccessCallback: () => void
): CustomAction<any> => {
    return {
        type: searchByStateActions.CREATE_SEARCH_BY_STATE,
        payload: request,
        onApiSuccessCallback,
    };
};

export const addStateSuccess = (data: any) => ({
    type: searchByStateActions.CREATE_SEARCH_BY_STATE_SUCCESS,
    payload: data
})

export const addStateFailure = (message: any) => ({
    type: searchByStateActions.CREATE_SEARCH_BY_STATE_FAILURE,
    payload: message
})