"use client";

import { useEffect } from "react";

export function ErrorTracker() {
  useEffect(() => {
    window.onerror = function (message, source, lineno, colno, error) {
      console.log("Gobal JS error: ", {
        message,
        source,
        lineno,
        colno,
        error,
      });
    };

    window.onunhandledrejection = function (event) {
      console.log(
        "Promise without .catch! || async/await without try/catch!:",
        event.reason,
      );
    };

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, []);

  return null;
}
