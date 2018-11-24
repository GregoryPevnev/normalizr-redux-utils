export const merge = (data: any, normalized: any) => {
    if (data === null) return normalized;

    const entities = Object.keys(data.entities).reduce((state, prop) => {
        return Object.assign({}, state, {
            [prop]: Object.assign(
                {},
                data.entities[prop],
                normalized.entities[prop] || {}
            )
        });
    }, {});

    const result = Object.keys(data.result).reduce((state, prop) => {
        return Object.assign({}, state, {
            [prop]: [...data.result[prop], ...(normalized.result[prop] || [])]
        });
    }, {});

    return { entities, result };
};
