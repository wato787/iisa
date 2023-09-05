import { signOut } from "next-auth/react";
import React from "react";

const Header = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="m-10">ホーム</li>
        <li className="m-10">グラフ</li>
        <button
          onClick={() =>
            signOut({
              callbackUrl: "/auth/signin",
            })
          }
          className="m-10"
        >
          ログアウト
        </button>
      </ul>
    </nav>
  );
};

export default Header;
