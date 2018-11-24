import { normalize, denormalize, Schema } from "normalizr";
import { merge } from "./utils";

export interface NormalizedState<T> {
    get(schema: string, id: any): object | null;
    all(): T | null;
    merge(values: any): NormalizedState<T>;
    clear(): NormalizedState<T>;
    assign(values: any): NormalizedState<T>;
}

export interface NormalizedStateFactory<T> {
    (data: any): NormalizedState<T>;
}

const createContainer = <T>(schema: Schema, initData: any = null) => {
    const getNormalized: NormalizedStateFactory<T> = (data: any) => ({
        get(schema: string, id: any) {
            const entity =
                data && data.entities[schema] && data.entities[schema][id];
            return entity || null;
        },
        all(): T | null {
            if (data === null) return null;
            return denormalize(data.result, schema, data.entities);
        },
        merge(values: any) {
            return getNormalized(merge(data, normalize(values, schema)));
        },
        assign(values: any) {
            return getNormalized(normalize(values, schema));
        },
        clear() {
            return getNormalized(initData);
        }
    });

    return getNormalized(initData);
};

export default createContainer;
