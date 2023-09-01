import { SignInResponse, signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Signin = () => {
  return (
    <div className="relative grid h-screen grid-cols-2 items-center justify-center bg-secondary">
      <div className="absolute -left-1/4  h-[96%] w-full">
        <video className="h-full w-full" autoPlay muted loop>
          <source src="/movies/tsumiki.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="card glass absolute right-[15%] h-4/5 w-1/3">
        <Image
          width={400}
          height={600}
          src="/images/logo.png"
          alt="積み上げいいさ"
        />
        <div className="card-body">
          <h2 className="card-title">さあ、積み上げていただきます</h2>
          <p>Tsumiage te morae masuka?</p>
          <div className="card-actions justify-end">
            <button
              onClick={(): Promise<SignInResponse | undefined> =>
                signIn("google", { callbackUrl: "/" })
              }
              className="btn btn-primary"
            >
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
