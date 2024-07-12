import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../appwrite-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(true);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailSession(userInfo.email, userInfo.password);
      console.log("SESSION: ", response);
      setUser(response); // Set the user state to response after successful login
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const registerUser = async (userInfo) => {
    // Implement register functionality
  };

  const checkUserStatus = async () => {
    try {
      let response = await account.get();
      setUser(response); // Set the user state to response if user is logged in
    } catch (error) {
      console.error(error);
      setUser(null);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
