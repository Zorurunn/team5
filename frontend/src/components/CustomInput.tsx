"use client";

import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import {
  Search,
  VisibilityOff,
  Visibility,
  LocationOn,
} from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from "react";
type CustomInputProps = {
  onBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error?: boolean | undefined;
  value?: string | number;
  name?: string;
  label?: string;
  placeHolder?: string;
  type: HTMLInputTypeAttribute;
  handleChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  adornment?: "end" | "start";
  size?: "small" | "medium";
  borderColor?: string;
  borderRadius?: string;
  bgcolor?: string;
  id?: string;
  isError?: string;
  isTouched?: boolean;
  helperText?: string;
  select?: boolean;
  iconType?: "location" | "search" | "category" | "$" | "calendar";
  multiLine?: boolean;
  variant?: "outlined" | "filled" | "standard";
} & TextFieldProps;

export const CustomInput = (props: CustomInputProps) => {
  const {
    onBlur,
    error,
    name,
    value,
    label,
    handleChange,
    type = "text",
    placeHolder,
    adornment,
    size,
    borderColor,
    borderRadius = "8px",
    id,
    isError,
    isTouched,
    helperText,
    children,
    select = false,
    iconType = "search",
    multiLine = false,
    bgcolor = "#ECEDF0",
    variant = "outlined",
    sx,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSearch = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack width={"100%"}>
      <Typography color={"text.primary"}>{label}</Typography>
      <TextField
        {...rest}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        onBlur={onBlur}
        error={error}
        helperText={isError && isTouched && helperText}
        type={type === "password" && showPassword ? "text" : type}
        select={select}
        multiline={multiLine}
        rows={multiLine ? 2 : 0}
        variant={variant}
        sx={{
          "& .MuiSelect-select": {
            padding: size === "small" ? "3px 8px" : "14px 16px",
            borderRadius: borderRadius,
          },
          "& fieldset": {
            borderColor: borderColor,
            borderRadius: borderRadius,
          },
          width: "100%",
          bgcolor: bgcolor,
          borderRadius: borderRadius,
          ...sx,
        }}
        inputProps={{
          style: {
            padding: size === "small" ? "3px 8px" : "14px 16px",
          },
        }}
        InputProps={{
          endAdornment: adornment === "end" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: adornment === "start" && (
            <InputAdornment position="start">
              {
                <IconButton onClick={handleSearch}>
                  {iconType === "search" && <Search style={{ fill: "#000" }} />}
                  {iconType === "location" && <LocationOn />}
                  {iconType === "category" && (
                    <CategoryOutlinedIcon style={{ fill: "#000" }} />
                  )}
                  {iconType === "$" && (
                    <AttachMoneyIcon style={{ fill: "#000" }} />
                  )}
                  {iconType === "calendar" && (
                    <CalendarTodayOutlinedIcon style={{ fill: "#000" }} />
                  )}
                </IconButton>
              }
            </InputAdornment>
          ),
        }}
      >
        {children}
      </TextField>
      <Typography fontSize={12} color={"error"}>
        {error && helperText}
      </Typography>
    </Stack>
  );
};
