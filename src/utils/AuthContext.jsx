import {
  useContext,
  useState,
  useEffect,
  createContext,
  Children,
} from "react";
import { account } from "../appwrite-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailSesssion(
        userInfo.email,
        userInfo.password
      );
      console.log("SESSION:", response);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };
  const logoutUser = () => {};
  const registerUser = (userInfo) => {};
  const checkUserStatus = () => {};

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
