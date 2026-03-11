import "@testing-library/jest-dom";
import "vitest-styled-components";

// Suppress console errors during tests
const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes?.("Warning:") || args[0]?.includes?.("Error:")) {
    return;
  }
  originalError(...args);
};
