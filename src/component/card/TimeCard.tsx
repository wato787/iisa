import Image from "next/image";
import React, { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCount } from "../../redux/slice/countSlice";
import Link from "next/link";

const TimeCard = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const { count } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  console.log(count);

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
    <div className="card glass flex h-3/4 w-1/3 flex-col items-center justify-center">
      <figure>
        <Image width={400} height={600} src="/images/logo.png" alt="いいさ" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mb-2">time</h2>
        <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
          <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": hour } as never}>{hour}</span>
            </span>
            hours
          </div>
          <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": min } as never}>{min}</span>
            </span>
            min
          </div>
          <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": sec } as never}>{sec}</span>
            </span>
            sec
          </div>
        </div>
        <p className="mb-2">Startとちゃらちゃら</p>
        <div
          className="card-actions"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* {!isCounting ? (
            <button className="btn btn-primary" onClick={handleButtonClick}>
              どがしゃんぼたん
            </button>
          ) : (
            <>
              {showFinishButton && (
                <button
                  className="btn btn-secondary"
                  onClick={handleFinishButtonClick}
                >
                  終了
                </button>
              )}
              {showBreakButton && (
                <button
                  className="btn btn-secondary"
                  onClick={handleBreakButtonClick}
                >
                  休憩
                </button>
              )}
            </>
          )} */}
          <div>
            <p>Count: {count}</p>
            <p>Interval State: {intervalState}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
          </div>
          <Link href="/graph">dddd/</Link>
        </div>

        {/* {buttonClickTime && <p>ボタンおしたー: {buttonClickTime}</p>} */}
      </div>
    </div>
  );
};

export default TimeCard;
