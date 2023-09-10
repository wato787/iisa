import Image from "next/image";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCount } from "../../redux/slice/countSlice";
import { useCount } from "../../hooks/useCount";
import { useSession } from "next-auth/react";
import { CreateCount, StopCount } from "../../schema/count";

const TimeCard = (): ReactElement => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const { count, data } = useSelector((state: RootState) => state.count);
  const { createCount, stopCount } = useCount();
  const dispatch = useDispatch();
  const user = useSession().data?.user;

  const [intervalState, intervalControl] = useInterval(
    () => {
      dispatch(setCount(count + 1));
    },
    1000,
    false
  );

  const handleStart = useCallback(async () => {
    if (!user) return;
    intervalControl.start();
    const req: CreateCount = {
      userId: user.id,
      userName: user.name as string,
      month: new Date().getMonth() + 1,
    };
    await createCount.mutate(req);
  }, [user, createCount, intervalControl]);

  const handleReStart = useCallback(() => {
    intervalControl.start();
  }, [intervalControl]);

  const handleStop = useCallback(() => {
    intervalControl.stop();
    const req: StopCount = {
      id: data.id as string,
      workedTime: count,
    };
    stopCount.mutate(req);
  }, [intervalControl, stopCount, data, count]);
  const handleBreak = () => {
    intervalControl.breaked();
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
          {intervalState == "STOPPED" && (
            <button
              className="btn btn-primary m-3 text-xl"
              onClick={handleStart}
            >
              すてぇとぅ
            </button>
          )}
          {intervalState == "RUNNING" && (
            <div className="flex items-center">
              <button
                className="btn btn-secondary m-3 text-xl"
                onClick={handleStop}
              >
                終了
              </button>
              <button
                className="btn btn-secondary m-3 text-xl"
                onClick={handleBreak}
              >
                休憩
              </button>
            </div>
          )}
          {intervalState == "BREAKED" && (
            <div className="flex items-center">
              <button
                className="btn btn-secondary m-3 text-xl"
                onClick={handleStop}
              >
                終了
              </button>
              <button
                className="btn btn-secondary m-3 text-xl"
                onClick={handleReStart}
              >
                休憩終了
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
