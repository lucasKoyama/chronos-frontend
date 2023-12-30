'use client';
import { useState, useEffect } from 'react';
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowLoading(true), 180);
    return () => clearTimeout(timeoutId);
  }, []);

  return showLoading ? <ArrowPathIcon className="w-28 m-auto mt-32 animate-spin" /> : null;
}
