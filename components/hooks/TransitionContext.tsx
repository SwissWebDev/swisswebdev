// components/TransitionContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

type TransitionContextType = {
  startTransition: (url: string) => void;
};

export const TransitionContext = createContext<TransitionContextType>({
  startTransition: () => {},
});

export const useTransitionContext = () => useContext(TransitionContext);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navigateUrl, setNavigateUrl] = useState<string | null>(null);

  const startTransition = (url: string) => {
    setNavigateUrl(url);
    setIsTransitioning(true);
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};
