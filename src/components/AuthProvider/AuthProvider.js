import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const firebaseHook = useFirebase()
    return (
        <AuthContext.Provider value={firebaseHook}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;