import { createStore } from "redux";
import { User } from "./schemas";
import { UserModel } from "./data";
import createContainer, { NormalizedState } from "../../src";

interface Users {
    users: UserModel[];
}

export interface State {
    loading: boolean;
    error: string | null;
    data: NormalizedState<Users>;
}

const defaultState = {
    loading: true,
    error: null,
    data: createContainer<Users>({ users: [User] })
};

const reducer = (state = defaultState, { type, payload }: any) => {
    switch (type) {
        case "MERGE":
            return { ...state, data: state.data.merge(payload) };
        case "ASSIGN":
            return { ...state, data: state.data.assign(payload) };
        case "CLEAR":
            return { ...state, data: state.data.clear() };
        default:
            return state;
    }
};

export default createStore(reducer);
