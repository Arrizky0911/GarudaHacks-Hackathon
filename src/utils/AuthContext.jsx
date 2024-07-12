import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { account, ID } from "../lib/appwrite-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const checkUserStatus = async () => {
      setLoading(true);
      try {
        const accountDetails = await account.get();
        setUser(accountDetails);
      } catch (error) {
        console.error('User Status Check Error:', error);
        // Redirect to login if user status check fails
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
  }, [navigate]);

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      await account.createEmailSession(email, password);
      const accountDetails = await account.get();
      setUser(accountDetails);
      navigate('/upload');
    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await account.deleteSession('current');
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout Error:', error);
      alert('Logout failed.');
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (email, password, name) => {
    setLoading(true);
    try {
      const userId = ID.unique();
      await account.create(userId, email, password, name);
      await loginUser(email, password);
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed. Please check the information provided.');
    } finally {
      setLoading(false);
    }
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
