export interface ISearchByState {
    state: string,
    latitude: number,
    longitude: number,
}

export const initSearchByState: ISearchByStateActions = {
    searchByState: null,
    searchByStateLoading: false,
    searchByStateFailed: false,
    searchByStateSuccess: false,
}

export interface ISearchByStateActions {
    searchByState: ISearchByState | any,
    searchByStateLoading: boolean,
    searchByStateFailed: boolean,
    searchByStateSuccess: boolean,
}