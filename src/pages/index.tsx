import type { NextPage } from "next";

import { useSession } from "next-auth/react";
import Auth from "../component/auth";
import Image from "next/image";

const Home: NextPage = () => {
  const { status } = useSession();

  return (
    <>
      <div className="flex items-center justify-center">
        <Image src="/logoo.png" width={250} height={250} alt="積み上げいいさ" />
      </div>
      <Auth />
    </>
  );
};

export default Home;
