import { signIn } from "next-auth/react";
import React from "react";

const Auth = () => {
  return (
    <>
      <div>
        <button className="bg-slate-400" onClick={() => signIn("google")}>
          google sign in
        </button>
      </div>
    </>
  );
};

export default Auth;
