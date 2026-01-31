import { useCallback, useMemo, useState } from "react";

/**
 * Standard async status machine:
 * idle -> loading/working -> idle OR error
 *
 * loading: initial fetch / page load
 * working: user-initiated actions (approve/delete/etc.)
 */
export function useAsyncStatus(initialStatus = "idle") {
  const [status, setStatus] = useState(initialStatus);
  const [error, setErrorState] = useState("");

  const clearError = useCallback(() => setErrorState(""), []);

  const setIdle = useCallback(() => setStatus("idle"), []);
  const setLoading = useCallback(() => setStatus("loading"), []);
  const setWorking = useCallback(() => setStatus("working"), []);

  const setError = useCallback(
    (err, fallbackMessage = "Something went wrong.") => {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        (typeof err === "string" ? err : fallbackMessage);

      setErrorState(message);
      setStatus("error");
      return message;
    },
    [],
  );

  /**
   * Wrap an async function with standardized status + error handling.
   *
   * @param {Function} fn async function to execute
   * @param {Object} options
   * @param {"loading"|"working"} options.mode which status to use while running
   * @param {boolean} options.clearErrorOnRun clear error before running
   * @param {boolean} options.rethrow rethrow after setting error
   */
  const run = useCallback(
    async (fn, options = {}) => {
      const {
        mode = "working",
        clearErrorOnRun = true,
        rethrow = false,
      } = options;

      if (clearErrorOnRun) clearError();

      // 👇 THIS is where the guard goes
      const safeMode = mode === "loading" ? "loading" : "working";
      setStatus(safeMode);

      try {
        const result = await fn();
        setStatus("idle");
        return result;
      } catch (err) {
        setError(err);
        if (rethrow) throw err;
        return undefined;
      }
    },
    [clearError, setError],
  );

  const flags = useMemo(
    () => ({
      isIdle: status === "idle",
      isLoading: status === "loading",
      isWorking: status === "working",
      isError: status === "error",
      isBusy: status === "loading" || status === "working",
    }),
    [status],
  );

  return {
    status,
    error,
    ...flags,

    setStatus, // exposed for rare cases
    setIdle,
    setLoading,
    setWorking,
    setError,
    clearError,

    run,
  };
}
