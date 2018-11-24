export const state1 = {
    entities: {
        numbers: {
            1: 1,
            2: 2,
            3: 3
        }
    },
    result: {
        numbers: [2, 1, 0]
    }
};

export const state2 = {
    entities: {
        numbers: {
            4: 4,
            5: 5
        }
    },
    result: {
        numbers: [3, 4]
    }
};

export const merged = {
    entities: {
        numbers: {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5
        }
    },
    result: {
        numbers: [2, 1, 0, 3, 4]
    }
};
