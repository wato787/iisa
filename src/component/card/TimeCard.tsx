import Image from "next/image";
import React, { useState, useEffect } from "react";

const TimeCard = () => {
  const now = new Date();
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [buttonClickTime, setButtonClickTime] = useState<string | null>(null);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [showBreakButton, setShowBreakButton] = useState(false);
  const [isCounting, setIsCounting] = useState(false); // カウント中かどうかを管理するステート変数

  const handleButtonClick = () => {
    const clickedTime = new Date();
    setButtonClickTime(clickedTime.toLocaleTimeString());

    // ボタンを表示する
    setShowFinishButton(true);
    setShowBreakButton(true);

    // カウントを始める
    setIsCounting(true);
  };

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        const now = new Date();
        setHour(now.getHours());
        setMin(now.getMinutes());
        setSec(now.getSeconds());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isCounting]);

  const handleFinishButtonClick = () => {
    // カウントを停止する
    setIsCounting(false);

    setShowFinishButton(false);
    setShowBreakButton(false);
  };

  const handleBreakButtonClick = () => {
    // カウントを停止する
    setIsCounting(false);

    setShowFinishButton(false);
    setShowBreakButton(false);
  };

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
          {!isCounting ? (
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
          )}
        </div>

        {buttonClickTime && <p>ボタンおしたー: {buttonClickTime}</p>}
      </div>
    </div>
  );
};

export default TimeCard;
