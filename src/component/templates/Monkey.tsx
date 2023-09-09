import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Monkey = () => {
  return (
    <div className="dropdown-right avatar dropdown m-10 ">
      <div className="avatar m-1">
        <div tabIndex={0} className=" w-24 cursor-pointer rounded-full">
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
        className="menu dropdown-content rounded-box glass z-[1] w-52 cursor-pointer p-2 shadow"
      >
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="graph">グラフページ</Link>
        </li>
        <li>
          <button onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
            ログアウト
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Monkey;
