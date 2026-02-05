import "./styles/globals.css";
import { CityProvider } from "./context/CityContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 🌍 GLOBAL CITY CONTEXT WRAPPER */}
        <CityProvider>
          {children}
        </CityProvider>
      </body>
    </html>
  );
}
