
import { Hydrate } from "@tanstack/react-query";
import {
    combineReducers,
    Store,
    Action,
    applyMiddleware,
    createStore,
} from "redux";
import rootReducer from "./rootReducer";
import { SagaMiddleware, Task } from "redux-saga";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { ICrimeTipState } from "./crimeTips/state";
import { createWrapper } from "next-redux-wrapper";
import { CustomAction } from "./crimeTips/acrions";

export interface SagaStore extends Store {
    sagaTask?: Task;
}
export interface IState {
    crimeTipState: ICrimeTipState
}

const combinedReducer = combineReducers(rootReducer);
const reducer = (state: IState | undefined, action: CustomAction<ICrimeTipState>) => {
    return combinedReducer(state as any, action);
}

const store = () => {
    let store: Store<IState, Action<any>>;
    const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

    store = createStore(reducer, undefined, applyMiddleware(sagaMiddleware));
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
    return store;

}
const wrapper = createWrapper(store);
export default wrapper;