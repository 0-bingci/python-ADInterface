import React from 'react'
import Header from "./components/header";
import '../../css/home.css'
import {Providers} from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body>
      <Providers>
        <div className='big'>
        <Header></Header>
        <div className='right'>{children}</div>
        </div>
      </Providers>
      </body>
    </html>
  );
}
