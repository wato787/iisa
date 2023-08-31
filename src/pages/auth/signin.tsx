import Image from "next/image";
import React from "react";

const signin = () => {
    
  return (
      <div className="relative grid grid-cols-2 h-screen items-center justify-center bg-secondary">
        <div className="absolute -left-1/4 -top-[85px] w-full">
          <video
            src="/tsumiki.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="card glass w-1/3 absolute right-[15%]">

            <Image width={400} height={600} src="/logoo.png" alt="積み上げいいさ" />

          <div className="card-body">
            <h2 className="card-title">さあ、積み上げていただきます</h2>
            <p>Tsumiage te morae masuka?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">ログイン</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default signin;
