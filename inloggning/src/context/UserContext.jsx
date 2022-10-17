import { createContext, useReducer } from "react";
import { reducer } from "../reducers/red";

const initialToken = { tokn: "" };

export const UserContext = createContext();

export function LoginProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialToken);

    const providerValue = {
        state,
        dispatch,
    };
    return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>;
}
