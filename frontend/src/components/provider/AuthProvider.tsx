"use client";

import { api } from "@/common";
import {
  PropsWithChildren,
  useContext,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";

type signUpParams = {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

type signInParams = {
  email: string;
  password: string;
};

type sendEmailParams = {
  email: string;
};

type reserPasswordParams = {
  email: string;
  code: string;
  newPassword: string;
};

type AuthContextType = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  isLoggedIn: boolean;
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  userOtp: string;
  setUserOtp: Dispatch<SetStateAction<string>>;
  sendEmail: (params: sendEmailParams) => Promise<void>;
  resetPassword: (params: reserPasswordParams) => Promise<void>;
  signUp: (params: signUpParams) => Promise<void>;
  signIn: (params: signInParams) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  const [index, setIndex] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userOtp, setUserOtp] = useState("");

  const signIn = async (params: signInParams) => {
    try {
      const { data } = await api.post("/signIn", params);

      const { token } = data;
      console.log(data);
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } finally {
    }
  };

  const signUp = async (params: signUpParams) => {
    try {
      const { data } = await api.post("/signUp", params);
      console.log(data);
      setStep((prev) => prev + 1);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const sendEmail = async (params: sendEmailParams) => {
    try {
      const { data } = await api.post("/sendEmail", params);
      console.log(data);

      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  const resetPassword = async (params: reserPasswordParams) => {
    try {
      const { data } = await api.post("/resetPassword", params);
      console.log(data);

      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userOtp,
        setUserOtp,
        step,
        setStep,
        index,
        setIndex,
        isLoggedIn,
        signIn,
        signUp,
        signOut,
        sendEmail,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
