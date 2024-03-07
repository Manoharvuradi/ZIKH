import { CustomAction } from "../crimeTips/acrions";
import { searchByStateActions } from "./actions";
import { ISearchByStateActions, initSearchByState } from "./state";

export default function reducer(
    state: ISearchByStateActions = initSearchByState,
    action: CustomAction<ISearchByStateActions>
): ISearchByStateActions {
    switch (action.type) {
        case searchByStateActions.LIST_STATE:
            return {
                ...state,
                searchByState: action.payload,
                searchByStateLoading: false,
                searchByStateFailed: false,
                searchByStateSuccess: false
            };
        case searchByStateActions.CREATE_SEARCH_BY_STATE_SUCCESS:
            return {
                ...state,
                searchByState: action.payload,
                searchByStateLoading: false,
                searchByStateFailed: false,
                searchByStateSuccess: true
            }
        case searchByStateActions.CREATE_SEARCH_BY_STATE_FAILURE:
            return {
                ...state,
                searchByState: null,
                searchByStateLoading: false,
                searchByStateFailed: true,
                searchByStateSuccess: false
            }
        default:
            return state;
    }

}