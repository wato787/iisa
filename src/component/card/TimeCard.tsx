import Image from "next/image";
import React, { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCount } from "../../redux/slice/countSlice";

const TimeCard = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const { count } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  const [intervalState, intervalControl] = useInterval(
    () => {
      dispatch(setCount(count + 1));
    },
    1000,
    false
  );

  const handleStart = () => {
    intervalControl.start();
  };

  const handleStop = () => {
    intervalControl.stop();
  };

  const shapeTime = (time: number) => {
    setHour(Math.floor(time / 3600));
    setMin(Math.floor((time % 3600) / 60));
    setSec(Math.floor((time % 3600) % 60));
  };

  useEffect(() => {
    shapeTime(count);
  }, [count]);

  return (
    <div className="card glass flex h-5/6 w-2/3 flex-col items-center justify-center">
      <figure>
        <Image width={500} height={650} src="/images/logo.png" alt="いいさ" />
      </figure>
      <div className="card-body text-center">
        <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
          <div className="rounded-box flex flex-col bg-neutral p-4 text-neutral-content">
            <span className="countdown font-mono text-8xl">
              <span style={{ "--value": hour } as never}>{hour}</span>
            </span>
            時間
          </div>
          <div className="rounded-box flex flex-col bg-neutral p-4 text-neutral-content">
            <span className="countdown font-mono text-8xl">
              <span style={{ "--value": min } as never}>{min}</span>
            </span>
            分
          </div>
          <div className="rounded-box flex flex-col bg-neutral p-4 text-neutral-content">
            <span className="countdown font-mono text-8xl">
              <span style={{ "--value": sec } as never}>{sec}</span>
            </span>
            秒
          </div>
        </div>
        <div className="card-actions flex justify-center">
          {intervalState == "STOPPED" ? (
            <button
              className="btn btn-primary m-3 text-xl"
              onClick={handleStart}
            >
              すてぇとぅ
            </button>
          ) : (
            <button
              className="btn btn-secondary m-3 text-xl"
              onClick={handleStop}
            >
              すとぅっぷ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
