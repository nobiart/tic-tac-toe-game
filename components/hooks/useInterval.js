import { useEffect } from "react";

export function useInterval(interval, enabled, cb) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const timerId = setInterval(() => {
      cb(Date.now());
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [enabled, interval, cb]);
}
