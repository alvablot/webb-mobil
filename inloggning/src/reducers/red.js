import { useReducer } from "react";

export function reducer(state, action) {
    if (action.type === "incremented_tkn") {
        return {
            tkn: state.tkn,
        };
    }
    throw Error("Unknown action.");
}
