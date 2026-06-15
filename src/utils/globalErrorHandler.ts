export function initGlobalErrorHandler() {
  window.onerror = function (message, source, lineno, colno, error) {
    console.log("Global JS error:", {
      message,
      source,
      lineno,
      colno,
      error,
    });
  };

  window.onunhandledrejection = function (event) {
    console.log("Global error in Promis (without .catch!):", {
      reason: event.reason,
    });
  };
}
