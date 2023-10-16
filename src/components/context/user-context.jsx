import { Children, createContext, useContext, useState, useEffect } from "react";
//import { getUser } from "../../services/posts-services";

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);   

   /* useEffect(() => {
        getUser().then((user) => setUser(user));   
        console.log("entra a user"+user);
    }, []);

    if (!user) {
         return (
             <div className="text-center">
                 <div className="spinner-border text-primary">nada</div>
             </div>
         );
     }*/

    return (
        <UserContext.Provider
            value={{
                user,
            }}
        > {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}

export default UserContextProvider;