import { useEffect, useState } from "react";

export function useNow(interval, enabled) {
  const [now, setNow] = useState();

  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }

    const timerId = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [enabled, interval]);

  return now;
}
