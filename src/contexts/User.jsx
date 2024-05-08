import { createContext, useState } from "react";
// happyamy2016

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("happyamy2016");
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
