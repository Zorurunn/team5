"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AuthProvider } from "@/components/provider/AuthProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";

import { theme } from "@/theme";
import { DataProvider } from "@/components/provider/DataProvider";
import { BackDropProvider } from "@/components/provider/BackDropProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <DataProvider>
                <BackDropProvider>{children}</BackDropProvider>
              </DataProvider>
            </AuthProvider>

            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
