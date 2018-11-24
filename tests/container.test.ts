import store from "./seed/store";
import { users } from "./seed/data";

describe("Container and Redux Tests", () => {
    test("should assign state", () => {
        store.dispatch({
            type: "ASSIGN",
            payload: { users: users.slice(2) }
        });

        expect(store.getState()).toMatchObject({
            loading: true,
            error: null
        });

        expect(store.getState().data.all()).toEqual({
            users: users.slice(2)
        });

        expect(store.getState().data.get("users", 1)).toBeNull();
    });

    test("should merge state", () => {
        store.dispatch({
            type: "MERGE",
            payload: { users: users.slice(0, 2) }
        });

        expect(store.getState()).toMatchObject({
            loading: true,
            error: null
        });

        expect(store.getState().data.all()).toEqual({
            users: [...users.slice(2), ...users.slice(0, 2)]
        });

        expect(store.getState().data.get("users", 1)).toMatchObject({
            id: 1,
            username: users[0].username
        });
    });

    test("should clear state", () => {
        store.dispatch({
            type: "CLEAR"
        });

        expect(store.getState()).toMatchObject({
            loading: true,
            error: null
        });

        expect(store.getState().data.all()).toBeNull();
    });
});
