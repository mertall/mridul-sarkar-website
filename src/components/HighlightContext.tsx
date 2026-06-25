"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// Shared scrollspy state: the project in the viewport center reports its associated
// role id; the Experience aside highlights the matching entry.
type Ctx = { active: string | null; setActive: (id: string | null) => void };

const HighlightCtx = createContext<Ctx>({ active: null, setActive: () => {} });

export function HighlightProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <HighlightCtx.Provider value={{ active, setActive }}>
      {children}
    </HighlightCtx.Provider>
  );
}

export const useHighlight = () => useContext(HighlightCtx);
