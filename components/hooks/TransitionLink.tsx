// components/TransitionLink.tsx
"use client";

import React from "react";
import { useTransitionContext } from "./TransitionContext";

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className,
}) => {
  const { startTransition } = useTransitionContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    startTransition(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
