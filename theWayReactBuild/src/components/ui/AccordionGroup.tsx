import { createContext, useContext, useState } from "react";

type AccordionContextType = {
  openKey: string | null;
  setOpenKey: (key: string | null) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

export function AccordionGroup({ children }: { children: React.ReactNode }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openKey, setOpenKey }}>
      <div className="acc-group">{children}</div>
    </AccordionContext.Provider>
  );
}

export function useAccordionGroup() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionSection must be used inside AccordionGroup");
  }
  return ctx;
}
