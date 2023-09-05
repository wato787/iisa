import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="dropdown-right avatar dropdown m-10">
    <div className="avatar m-1">
      <div tabIndex={0} className=" w-24 rounded-full">
        <Image
          width={100}
          height={200}
          src="/images/icon.jpeg"
          alt="いいさ"
        />
      </div>
    </div>

    <ul
      tabIndex={0}
      className="menu dropdown-content rounded-box glass z-[1] w-52 p-2 shadow"
    >
      <li>
        <a>ホーム</a>
      </li>
      <li>
        <a>グラフ</a>
      </li>
      <li>
        <button
          onClick={() =>
            signOut({ callbackUrl: "/auth/signin" })
          }
        >
          ログアウト
        </button>
      </li>
    </ul>
  </div>
  );
};

export default Header;
