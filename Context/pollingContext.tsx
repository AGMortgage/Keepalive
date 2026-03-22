"use client"
import { createContext,useContext, ReactNode } from "react"
import fetchData from "@/hooks/usePolling"
import { dashboard, search } from "@/types/dashboard"

interface DashboardContextType {
  pollServices: search[]
  pollCategories: string[]
  pollDashboard: dashboard | undefined
  loading: boolean;
}
const pollingContext = createContext<DashboardContextType | null>(null)

export const PollingProvider = ({ children }: { children: ReactNode }) => {

const {pollServices,pollCategories,pollDashboard, loading } = fetchData()
  
  return (
    <pollingContext.Provider value={{ pollServices, pollCategories, pollDashboard,loading }}>
      {children}
    </pollingContext.Provider>
  );
};
export function usePollingContext() {
  const context = useContext(pollingContext);
  if (!context) throw new Error("usePollingContext must be used within a PollingProvider");
  return context; // TypeScript now knows this is DashboardContextType, never null
}