"use client";

import { useState, useEffect } from "react";

export default function ConversionDebugPanel() {
  const [events, setEvents] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleGtagEvent = (event: any) => {
      setEvents((prev) => [...prev, JSON.stringify(event.detail || event)]);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("gtag_event", handleGtagEvent as EventListener);
      return () => window.removeEventListener("gtag_event", handleGtagEvent as EventListener);
    }
  }, []);

  if (!isMounted || process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-0 right-0 bg-white p-4 border border-gray-300 shadow-lg max-h-64 overflow-auto">
      <h3 className="text-sm font-bold">Conversion Debug</h3>
      <ul className="text-xs">
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}
