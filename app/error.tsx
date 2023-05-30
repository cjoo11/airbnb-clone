"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStatProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStatProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Oh No!" subtitle="Something went wrong!" />;
};

export default ErrorState;
