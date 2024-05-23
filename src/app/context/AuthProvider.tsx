"use client";
import { useState, createContext, useContext } from "react";
import { login } from "../api/userApi";
import Cookies from "js-cookie";

interface AuthContextType {
  user: string | null;
  loginUserAuth: (user: any) => Promise<string>;
  logoutUserAuth: () => {};
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loginUserAuth: async () => "",
  logoutUserAuth: async () => "",
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(() => {
    const userProfile = Cookies.get("userProfile");
    return userProfile ? JSON.parse(userProfile) : null;
  });

  const loginUserAuth = async (user: any) => {
    const res = await login();
    console.log(res);
    if (res.data.status === "ok") {
      Cookies.set("userProfile", JSON.stringify(res.data.token));
      setUser(res.data.token);
      return "loggedIn";
    }
    return "no";
  };

  const logoutUserAuth = async () => {
    setUser(null);
    Cookies.remove("userProfile");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUserAuth,
        logoutUserAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
