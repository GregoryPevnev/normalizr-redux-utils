import { merge } from "../src/utils";
import { state1, state2, merged, empty } from "./seed/states";

describe("Merging Tests", () => {
    test("should merge states", () => {
        expect(merge(state1, state2)).toEqual(merged);
    });

    test("should assign state with NULL", () => {
        expect(merge(null, merged)).toEqual(merged);
    });

    test("should handle empty entities/result", () => {
        expect(merge(merged, empty)).toEqual(merged);
    });
});
