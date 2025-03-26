"use client";

import { container, DependencyContainer } from "tsyringe";
import { createContext, useContext } from "react";

// Create a DI Context
const DIContext = createContext<DependencyContainer>(container);

export const DIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <DIContext.Provider value={container}>{children}</DIContext.Provider>;
};

// Hook to use DI inside components
export function useDI<T>(token: new (...args: any[]) => T): T {
  const container = useContext(DIContext);
  return container.resolve(token);
}
