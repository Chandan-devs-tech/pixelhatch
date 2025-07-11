"use client";

import StyledComponentsRegistry from "./lib/registry";
import GlobalStyles from "../styles/GlobalStyles";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PixelHatch - Creative Digital Agency</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Creative digital agency offering web design, branding, and digital marketing services"
        />
        <meta
          name="keywords"
          content="web design, branding, digital marketing, creative agency"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
