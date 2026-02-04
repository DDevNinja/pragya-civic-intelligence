"use client";
import { createContext, useContext, useState } from "react";

type CityContextType = {
  city: string;
  setCity: (city: string) => void;
};

const CityContext = createContext<CityContextType | null>(null);

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [city, setCity] = useState("Mumbai"); // default city

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (!context) throw new Error("useCity must be inside CityProvider");
  return context;
}
