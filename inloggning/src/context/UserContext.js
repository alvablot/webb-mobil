import { createContext } from "react";

const user = [
    {
        email: null,
        password: null,
        token: null,
    },
];

export const UserContext = createContext(user);
