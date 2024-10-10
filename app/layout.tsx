import type { Metadata } from "next";
// import localFont from "next/font/local";
// import ReactDOM from "react-dom/client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import rootReducer from "./reducers";
// import { Provider } from "react-redux";
import "./globals.scss";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const pressStartSans = localFont({
//   src: "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
//   variable: "--font-press-start-sans",
//   weight: "400 900",
// });
// const pressStartMono = localFont({
//   src: "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
//   variable: "--font-press-start-mono",
//   weight: "400 900",
// });


export const metadata: Metadata = {
  title: "Oak",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body
        className={`nes-container antialiased`}
        /* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */ 
      >
        {/* <QueryClientProvider client={queryClient}> */}
          {children}
          {/* <ReactQueryDevtools />
        </QueryClientProvider> */}
      </body>
    </html>
  );
}
