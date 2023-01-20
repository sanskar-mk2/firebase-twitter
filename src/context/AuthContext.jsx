import { createContext, useReducer } from "react";
export const AuthContext = createContext();

export const auth_reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(auth_reducer, { user: null });

    console.log("AUTH CTX =>", state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
