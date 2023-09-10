import { useEffect, useRef, useState } from "react";

type Control = {
  start: () => void;
  stop: () => void;
  breaked: () => void;
};

type State = "RUNNING" | "STOPPED" | "BREAKED";

type Fn = () => void;

export const useInterval = (
  fn: Fn,
  interval: number,
  autostart: boolean
): [State, Control] => {
  const onUpdateRef = useRef<Fn>();
  const [state, setState] = useState<State>("STOPPED");
  const start = () => {
    setState("RUNNING");
  };
  const stop = () => {
    setState("STOPPED");
  };
  const breaked = () => {
    setState("BREAKED");
  };
  useEffect(() => {
    onUpdateRef.current = fn;
  }, [fn]);
  useEffect(() => {
    if (autostart) {
      setState("RUNNING");
    }
  }, [autostart]);
  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (state === "RUNNING") {
      timerId = setInterval(() => {
        onUpdateRef.current?.();
      }, interval);
    } else {
      timerId && clearInterval(timerId);
    }
    return () => {
      timerId && clearInterval(timerId);
    };
  }, [interval, state]);
  return [state, { start, stop, breaked }];
};

export default useInterval;
