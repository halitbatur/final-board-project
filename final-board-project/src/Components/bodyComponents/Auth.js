import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect, useContext } from "react";

export const AuthContext = React.createContext(null);


const AuthProvider = ( {children} ) => {
  const auth = getAuth();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    })

    return function cleanUp() {
      listen();
    }

  }, []);

  const userSignOut = () => {

    signOut(auth).then(() => {
      console.log('user signed out');
    })
  };


  return (
    <AuthContext.Provider value = {authUser}>
    {authUser ? <button onClick={userSignOut}>signout</button> : ''}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;