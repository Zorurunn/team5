"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Backdrop,
  CircularProgress,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

type BackDropContextType = {
  setOpenLoading: Dispatch<SetStateAction<boolean>>;
};

const BackDropContext = createContext<BackDropContextType>(
  {} as BackDropContextType
);

export const BackDropProvider = ({ children }: PropsWithChildren) => {
  const [openLoading, setOpenLoading] = useState(false);

  return (
    <BackDropContext.Provider
      value={{
        setOpenLoading,
      }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={openLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </BackDropContext.Provider>
  );
};

export const useBackDrop = () => useContext(BackDropContext);
