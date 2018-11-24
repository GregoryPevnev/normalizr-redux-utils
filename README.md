# Making Normalization with Redux easier

> Utilities for working with Redux and Normalizr

#### Merging and Assigning Normalized State

## Guide

### Installation

```sh
$ npm install normalizr-redix-utils
```

### Import

```javascript
// Normalizr-Schemas for defining entities
import { schema } from "normalizr";
// Container for manipulating Normalized Data
import createContainer from "normalizr-redix-utils";
```

### Create Container

Initialize Container with Schema that should be used for merging and assigning data to the state

```javascript
// Create Container using Normalizr-Schema(Entities, Arrays, etc.)
// Second argument is optional - null by default
const container = createContainer(normalizrSchema, defaultStateOrNull);
```

### API

##### Get Denormalized presentation of the State

```javascript
container.all(); // -> Returns data in the same format it was passed (According to the Schema)
```

##### Get a single Entity from a certain Schema

```javascript
container.get("schema", "id"); // -> Returns normalized presentation of a Schema
```

#### Important: All Operations return new Container instead of changing current - Following Immutability Principle

##### Reset State

```javascript
newContainer = container.reset(); // -> Returns a new container with initial State
```

##### Assign new State

```javascript
newContainer = container.assign(rawState); // -> Normalizes provided data using Schema and reassigns current state
```

##### Merge current State

```javascript
newContainer = container.merge(rawState); // -> Merges new State wit Current and returns a Container
```

## Sample

> Use Normalizr-Container within Redux-Reducer

```javascript
// Defining Schemas
const { Entity } = schema;

export const Post = new Entity("posts", {});

export const Blog = new Entity("blogs", {
    posts: [Post]
});

export const User = new Entity("users", {
    blogs: [Blog],
    posts: [Post]
});

// Defining Default-State
const defaultState = {
    loading: true,
    error: null,
    data: createContainer({ users: [User] })
};

// Using Normalizr-Container Inside or reducer with immutability
const reducer = (state = defaultState, { type, payload }) => {
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
```
